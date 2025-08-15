import { Router } from 'express';
import { authorizeRoles, isLoggedIn } from '../../middleware/auth.middleware';
import validate from '../../middleware/validate.middleware';
import { clientSchema } from '../../validators/client.validator';
import { Role } from '../../types/user.interface';
import {
  createClient,
  deleteClient,
  getAllClients,
  updateClient,
} from '../../controllers/client.controller';
const router = Router();

/**
 * @Route {{URL}}/api/v1/client
 */
router
  .route('/')
  .get(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN), getAllClients);

router
  .route('/create')
  .post(
    isLoggedIn,
    validate(clientSchema),
    authorizeRoles(Role.SUPER_ADMIN, Role.ADMIN),
    createClient
  );

router
  .route('/:id')
  .put(
    isLoggedIn,
    validate(clientSchema),
    authorizeRoles(Role.SUPER_ADMIN),
    updateClient
  );

router
  .route('/:id')
  .delete(isLoggedIn, authorizeRoles(Role.SUPER_ADMIN), deleteClient);

export default router;
