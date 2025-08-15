/**
 * create client
 * update client
 * delete client
 * get all clients
 * get client by id
 * get clients by service id
 * get clients by status
 * get clients by name
 * get clients by contact
 * get clients by service id and status
 * get clients by service id and name
 * get clients by service id and contact
 * get clients by service id and status and name
 * get clients by service id and status and contact
 * get clients by service id and name and contact
 * get clients by service id and status and name and contact
 * get clients by service id and status and name and contact
 * get clients by service id and status and name and contact and avatar
 * get clients by service id and status and name and contact and avatar
 * get clients by service id and status and name and contact and avatar and createdAt
 */

import { NextFunction, Response, Request } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import { ApiError } from '../helper/apiError.helper';
import { Client } from '../models/client.model';
import mongoose from 'mongoose';
import { Service } from '../models/services.model';

/**
 * @createClient
 * @ROUTE @POST {{URL}}/api/v1/client/create
 * @desc Create a new client
 * @returns created client data
 * @ACCESS Private (super_admin, admin)
 */
export const createClient = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, contact, service, status } = req.body;
    const owner = req.user?.user_id; // Assuming req.user is populated with the authenticated user's data

    // Validate required fields
    if (!name || !contact || !service || !owner) {
      return next(
        new ApiError('Name, contact, and service ID are required', 400)
      );
    }

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(service)) {
      return next(new ApiError('Invalid service ID format', 400));
    }

    // Check if service exists
    const serviceExists = await Service.findById(service);
    if (!serviceExists) {
      return next(new ApiError('Service not found', 404));
    }

    // Create new client
    const newClient = new Client({
      name,
      contact,
      service, // This is a valid ObjectId ref to Service
      status,
      owner, // This is a valid ObjectId ref to User
    });

    await newClient.save();

    res.status(201).json({
      success: true,
      data: newClient,
    });
  }
);

/**
 * @getAllClient
 * @ROUTE @GET {{URL}}/api/v1/clients
 * @desc Get all clients
 * @returns list of clients
 * @ACCESS Private (super_admin)
 */
export const getAllClients = asyncHandler(async (_: Request, res: Response) => {
  const clients = await Client.find()
    .populate('service')
    .populate('owner')
    .lean();
  res.status(200).json({
    success: true,
    data: clients,
  });
});

/**
 * @updateClient
 * @ROUTE @PUT {{URL}}/api/v1/client/update/:id
 * @desc Update client by id
 * @returns updated client data
 * @ACCESS Private (super_admin)
 */
export const updateClient = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, contact, service, status } = req.body;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ApiError('Invalid client ID format', 400));
    }

    // Check if client exists
    const client = await Client.findById(id).populate('service');
    console.log(client);
    if (!client) {
      return next(new ApiError('Client not found', 404));
    }

    // Update client fields
    client.name = name || client.name;
    client.contact = contact || client.contact;
    if (req.user?.user_id) {
      client.owner =
        typeof req.user.user_id === 'string'
          ? new mongoose.Types.ObjectId(req.user.user_id)
          : req.user.user_id;
    }

    // Validate service ID if provided
    if (service) {
      if (!mongoose.Types.ObjectId.isValid(service)) {
        return next(new ApiError('Invalid service ID format', 400));
      }
      client.service = service;
    }
    client.status = status || client.status;

    await client.save();

    const updatedClient = await Client.findById(id).populate('service');

    res.status(200).json({
      success: true,
      data: updatedClient,
    });
  }
);

/**
 * @deleteClient
 * @ROUTE @DELETE {{URL}}/api/v1/client/delete/:id
 * @desc Delete client by id
 * @returns deleted client data
 * @ACCESS Private (super_admin)
 */
export const deleteClient = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ApiError('Invalid client ID format', 400));
    }

    // Check if client exists
    const client = await Client.findById(id);
    if (!client) {
      return next(new ApiError('Client not found', 404));
    }

    await Client.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Client deleted successfully',
      data: client,
    });
  }
);
