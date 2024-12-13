import { Router } from 'express';
import { me } from '../../controllers/user.controller';
import { isLoggedIn } from '../../middleware/auth.middleware';

const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/auth
 */

router.route('/me').get(isLoggedIn, me);

export default router;
