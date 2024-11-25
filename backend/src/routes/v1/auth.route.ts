import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import { userRegistration } from '../../validators/auth.schema.validator';
import { registerUser } from '../../controllers/auth.controller';

const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/auth
 */
router.route('/new').post(validate(userRegistration), registerUser);

export default router;
