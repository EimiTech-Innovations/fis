/**
 * create plan
 * update plan
 * delete plan
 * get all plans
 * get plan by id
 * get plans by billing cycle
 * get plans by isActive status
 * get plans by isFree status
 * get plans by name
 * get plans by price range
 * get plans by currency
 * get plans by description
 * get plans by multiple criteria
 * get plans with pagination
 * get plans with sorting
 * get plans with filtering
 *
 */
// TODO: implement currency functionality later
// TODO: integrate with payment gateway for plan purchases
/**
 * @createPlan
 * @ROUTE @POST {{URL}}/api/v1/plan/create
 * @desc Create a new plan
 * @returns created plan data
 * @ACCESS Private (super_admin)
 */
import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import { Plan } from '../models/plan.model';
import { ApiError } from '../helper/apiError.helper';

export const createPlan = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      name,
      description,
      price,
      billingCycle,
      currency,
      isActive,
      isFree,
    } = req.body;

    console.log(req.body);

    // Validate required fields
    if (!name || !price || !billingCycle) {
      return next(
        new ApiError('Name, price, and billing cycle are required', 400)
      );
    }

    // Create new plan
    const newPlan = new Plan({
      name,
      description,
      price,
      billingCycle,
      currency,
      isActive,
      isFree,
    });

    // Save plan to database
    await newPlan.save();
    res
      .status(201)
      .json({ message: 'Plan created successfully', plan: newPlan });
  }
);

/**
 * @updatePlan
 * @ROUTE @POST {{URL}}/api/v1/plan/update/:id
 * @desc update an existing plan by ID
 * @returns updated plan data
 * @ACCESS Private (super_admin)
 */
export const updatePlan = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      billingCycle,
      currency,
      isActive,
      isFree,
    } = req.body;

    // Validate required fields
    if (!name || !price || !billingCycle) {
      return next(
        new ApiError('Name, price, and billing cycle are required', 400)
      );
    }

    // Find and update plan
    const updatedPlan = await Plan.findByIdAndUpdate(
      id,
      { name, description, price, billingCycle, currency, isActive, isFree },
      { new: true }
    );

    if (!updatedPlan) {
      return next(new ApiError('Plan not found or could not be updated', 404));
    }

    res
      .status(200)
      .json({ message: 'Plan updated successfully', plan: updatedPlan });
  }
);

/**
 * @getPlans
 * @ROUTE @get {{URL}}/api/v1/plan/all
 * @desc get all plans
 * @returns list of all plans
 * @ACCESS Private (super_admin & admin)
 */
export const getPlans = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const plans = await Plan.find();
    console.log(plans);

    if (!plans || plans.length === 0) {
      return next(new ApiError('No plans found', 404));
    }

    res.status(200).json({ message: 'Plans retrieved successfully', plans });
  }
);

/**
 * @deletePlan
 * @ROUTE @DELETE {{URL}}/api/v1/plan/:id
 * @desc delete a plan by ID
 * @returns success message of delete plan
 * @ACCESS Private (super_admin)
 */
export const deletePlan = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Find and delete plan
    const deletedPlan = await Plan.findByIdAndDelete(id);

    if (!deletedPlan) {
      return next(new ApiError('Plan not found or could not be deleted', 404));
    }

    res.status(200).json({ message: 'Plan deleted successfully' });
  }
);
