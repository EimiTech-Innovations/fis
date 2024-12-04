import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import {
  userForgotPasswordSchema,
  userLoginSchema,
  userRegistrationSchema,
} from '../../validators/auth.schema.validator';
import {
  forgotPassword,
  registerUser,
  userLogin,
  userLogout,
} from '../../controllers/auth.controller';

const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/auth
 */
router.route('/new').post(validate(userRegistrationSchema), registerUser);
router.route('/login').post(validate(userLoginSchema), userLogin);
router.route('/logout').post(userLogout);
router
  .route('/forgotPassword')
  .post(validate(userForgotPasswordSchema), forgotPassword);

export default router;
