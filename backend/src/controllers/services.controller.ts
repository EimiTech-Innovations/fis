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

/**
 * @UPDATE_SERVICE
 * @ROUTE @PUT {{URL}}/api/v1/service/:id
 * @returns Updated service details
 * @ACCESS Private (super_admin )
 */

export const updateService = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, description, plans, isActive } = req.body;

    // check if the service exist
    const serviceExist = await Services.findById(id).lean();
    if (!serviceExist) {
      return next(new ApiError('Service not found', 404));
    }

    const updatedService = await Services.findByIdAndUpdate(
      id,
      { name, description, plans, isActive },
      { new: true }
    ).lean();

    if (!updatedService) {
      return next(new ApiError('Failed to update service', 400));
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Service updated successfully',
      services: updatedService,
    });
  }
);
/**
 * @DELETE_SERVICE
 * @ROUTE @DELETE {{URL}}/api/v1/services/:id
 * @returns Deleted service details
 * @ACCESS Private (super_admin )
 */
export const deleteService = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // check if the service exist
    const serviceExist = await Services.findById(id).lean();
    if (!serviceExist) {
      return next(new ApiError('Service not found', 404));
    }

    const deletedService = await Services.findByIdAndDelete(id).lean();

    if (!deletedService) {
      return next(new ApiError('Failed to delete service', 400));
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Service deleted successfully',
      services: deletedService,
    });
  }
);
/**
 * @GET_SERVICE_BY_ID
 * @ROUTE @GET {{URL}}/api/v1/services/:id
 * @returns Service details by id
 * @ACCESS Private (super_admin & admin )
 */
export const getServiceById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // check if the service exist
    const service = await Services.findById(id).lean();
    if (!service) {
      return next(new ApiError('Service not found', 404));
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Service fetched successfully',
      services: service,
    });
  }
);

/**
 * @GET_SERVICES_BY_NAME
 * @ROUTE @GET {{URL}}/api/v1/services/name/:name
 * @returns Service details by name
 * @ACCESS Private (super_admin & admin )
 */
export const getServicesByName = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    // check if the service exist
    const services = await Services.find({
      name: { $regex: name, $options: 'i' },
    }).lean();
    if (!services || services.length === 0) {
      return next(
        new ApiError('No services found with the provided name', 404)
      );
    }
    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Services fetched successfully',
      services,
    });
  }
);
/**
 * @GET_SERVICES_BY_STATUS
 * @ROUTE @GET {{URL}}/api/v1/services/status/:status
 * @returns Service details by status
 * @ACCESS Private (super_admin & admin )
 */
export const getServicesByStatus = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { isActive } = req.params;

    // check if the service exist
    const services = await Services.find({ isActive: isActive }).lean();
    if (!services || services.length === 0) {
      return next(
        new ApiError('No services found with the provided status', 404)
      );
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Services fetched successfully',
      services,
    });
  }
);
