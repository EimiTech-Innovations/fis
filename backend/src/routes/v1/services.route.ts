import { Router } from 'express';
import validate from '../../middleware/validate.middleware';

import { createService } from '../../controllers/services.controller';
import { serviceSchema } from '../../validators/service.schema.validator';
import { authorizeRoles, isLoggedIn } from '../../middleware/auth.middleware';
const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/services
 */
router
  .route('/new')
  .post(
    validate(serviceSchema),
    isLoggedIn,
    authorizeRoles('super-admin'),
    createService
  );
