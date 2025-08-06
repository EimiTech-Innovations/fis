/**
 * create service
 * update service
 * delete service
 * get all services
 * get service by id
 * get services by name
 * get services by status
 * get services by name and status
 * get services by name and description
 * get services by name and description and status
 * */

import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import { Services } from '../models/services.model';
import { ApiError } from '../helper/apiError.helper';

/**
 * @CREATE_SERVICE
 * @ROUTE @POST {{URL}}/api/v1/services
 * @returns Created service details
 * @ACCESS Private (super admin )
 */
export const createService = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, plans, active } = req.body;

    // check if the user already exist
    const serviceExist = await Services.findOne({ name }).lean();
    if (serviceExist) {
      return next(new ApiError('Service provided already exist', 400));
    }

    const service = await Services.create({
      name,
      description,
      plans,
      active,
    });

    if (!service) {
      return next(new ApiError('failed to create service', 400));
    }

    // Respond with success
    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      services: service,
    });
  }
);

/**
 * @GETALL_SERVICES
 * @ROUTE @GET {{URL}}/api/v1/services
 * @returns fetch all services details
 * @ACCESS Private (super_admin & admin )
 */
export const getAllServices = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const services = await Services.find({}).lean();

    if (!services || services.length === 0) {
      return next(new ApiError('No services found', 404));
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Services fetched successfully',
      services,
    });
  }
);
