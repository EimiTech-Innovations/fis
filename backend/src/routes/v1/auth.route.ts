import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import {
  userLoginSchema,
  userRegistrationSchema,
} from '../../validators/auth.schema.validator';
import { registerUser, userLogin } from '../../controllers/auth.controller';

const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/auth
 */
router.route('/new').post(validate(userRegistrationSchema), registerUser);
router.route('/login').post(validate(userLoginSchema), userLogin);

export default router;
