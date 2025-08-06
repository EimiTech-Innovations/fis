import { Router } from 'express';
import { getAllUser, getProfile } from '../../controllers/user.controller';
import { authorizeRoles, isLoggedIn } from '../../middleware/auth.middleware';
import { Role } from '../../types/user.interface';

const router = Router();

/**
 * @ROUTE {{URL}}/api/v1/user
 */

router.route('/me').get(isLoggedIn, getProfile);
router
  .route('/all')
  .get(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN), getAllUser);

export default router;
