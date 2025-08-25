import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import mongoose from 'mongoose';
import { ApiError } from '../helper/apiError.helper';
import { ClientService } from '../models/clientService.model';
import { Service } from '../models/services.model';
import { IServices } from '../types/service.interface';
import { Plan } from '../models/plan.model';

/**
 * @controller ClientServiceController
 * @description create service for a client
 * @ROUTE @POST {{URL}}/api/v1/client-service
 * @returns Create details
 * @ACCESS Private (super & admin )
 */
const createClientService = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { service, plan } = req.body;

    // Validate required fields
    if (!service || !plan) {
      return next(
        new ApiError(
          'Client ID, Service ID, Plan ID, and Start Date are required',
          400
        )
      );
    }

    // Validate ObjectId format
    if (
      !mongoose.Types.ObjectId.isValid(service) ||
      !mongoose.Types.ObjectId.isValid(plan)
    ) {
      return next(new ApiError('Invalid ID format', 400));
    }

    // Check if service exists
    const serviceExists: IServices | null = await Service.findById(service);
    if (!serviceExists) {
      return next(new ApiError('Service not found', 404));
    }

    // Check if plan exists within the service
    const planExists =
      Array.isArray(serviceExists.plans) &&
      serviceExists.plans.some((p: mongoose.Types.ObjectId) => p.equals(plan));
    if (!planExists) {
      return next(new ApiError('Plan not found in the specified service', 404));
    }

    // TODO: integrate payment gateway
    const planDoc = await Plan.findById(plan).lean();
    if (!planDoc) {
      return next(new ApiError('Plan not found', 404));
    }
    let { billingCycle, price } = planDoc;

    let endDate: Date | undefined;
    if (billingCycle === 'MONTHLY') {
      price = price * 1;
      endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);
    }

    if (billingCycle === 'YEARLY') {
      price = price * 12;
      endDate = new Date();
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    if (billingCycle === 'ONE_TIME') {
      price = price * 1;
      endDate = new Date(Infinity); // Set endDate to infinity
    }

    // Create new client service
    const startDate = new Date();
    const newClientService = new ClientService({
      client: req.user?.user_id,
      service: service,
      plan: plan,
      startDate,
      endDate,
      status: 'ACTIVE',
    });

    await newClientService.save();

    res.status(201).json({
      success: true,
      message: 'Client service created successfully',
      clientService: newClientService,
    });
  }
);
