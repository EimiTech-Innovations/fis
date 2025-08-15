import { Router } from 'express';
import { authorizeRoles, isLoggedIn } from '../../middleware/auth.middleware';
import { Role } from '../../types/user.interface';
import {
  createPlan,
  deletePlan,
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
  .route('/:id')
  .post(
    validate(planSchema),
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN),
    updatePlan
  )
  .delete(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN), deletePlan);

router
  .route('/all')
  .get(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN), getPlans);

export default router;
