import { Router } from 'express';
import validate from '../../middleware/validate.middleware';

import {
  createService,
  getAllServices,
} from '../../controllers/services.controller';
import { serviceSchema } from '../../validators/service.schema.validator';
import { authorizeRoles, isLoggedIn } from '../../middleware/auth.middleware';
import { Role } from '../../types/user.interface';
const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/service
 */
router
  .route('/')
  .get(
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN),
    getAllServices
  );

router
  .route('/new')
  .post(
    validate(serviceSchema),
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN),
    createService
  );

export default router;
