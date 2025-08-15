import { Router } from 'express';
import validate from '../../middleware/validate.middleware';

import {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  getServicesByName,
  getServicesByStatus,
  updateService,
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

router
  .route('/name/:name')
  .get(
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN),
    getServicesByName
  );

router
  .route('/id/:id')
  .put(
    validate(serviceSchema),
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN),
    updateService
  )
  .get(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN), getServiceById)
  .delete(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN), deleteService);

router
  .route('/active/:isActive')
  .get(
    isLoggedIn,
    authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN),
    getServicesByStatus
  );
export default router;
