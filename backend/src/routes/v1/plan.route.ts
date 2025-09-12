import { Router } from 'express';
import { authorizeRoles, isLoggedIn } from '../../middleware/auth.middleware';
import { Role } from '../../types/user.interface';
import {
  createPlan,
  deletePlan,
  getPlanById,
  getPlans,
  updatePlan,
} from '../../controllers/plan.controller';
import validate from '../../middleware/validate.middleware';
import { planSchema } from '../../validators/plan.validator';

const router = Router();

/**
 * @Route {{URL}}/api/v1/plan/create
 */
router
  .route('/create')

  .post(
    validate(planSchema),
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN),
    createPlan
  );
router
  .route('/all')
  .get(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN), getPlans);
router
  .route('/:id')
  .get(isLoggedIn, authorizeRoles(Role.ADMIN, Role.SUPER_ADMIN), getPlanById)
  .post(
    validate(planSchema),
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN),
    updatePlan
  )
  .delete(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN), deletePlan);

export default router;
