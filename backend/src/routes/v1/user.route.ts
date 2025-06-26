import { Router } from 'express';
import { getAllUser, me } from '../../controllers/user.controller';
import { isLoggedIn } from '../../middleware/auth.middleware';

const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/user
 */

router.route('/me').get(isLoggedIn, me);
router.route('/all').get(isLoggedIn, getAllUser);

export default router;
