import { Router } from 'express';
import { body, param } from 'express-validator';
import * as userController from '../controllers/user.controller';
import { authenticate, authorize } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { UserRole } from '@prisma/client';

const router = Router();

// All routes require authentication
router.use(authenticate);

// User profile routes (available to all authenticated users)
router.put(
  '/profile',
  [
    body('firstName').optional().trim(),
    body('lastName').optional().trim(),
    body('phone').optional().trim(),
  ],
  validate,
  userController.updateProfile
);

router.put(
  '/change-password',
  [
    body('currentPassword').notEmpty(),
    body('newPassword').isLength({ min: 6 }),
  ],
  validate,
  userController.changePassword
);

// Admin routes
router.get(
  '/',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userController.getAllUsers
);

router.get(
  '/:id',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [param('id').isUUID()],
  validate,
  userController.getUserById
);

router.put(
  '/:id',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [
    param('id').isUUID(),
    body('email').optional().isEmail(),
    body('firstName').optional().trim(),
    body('lastName').optional().trim(),
    body('phone').optional().trim(),
    body('role').optional().isIn(['CUSTOMER', 'ADMIN', 'SUPER_ADMIN']),
    body('isVerified').optional().isBoolean(),
  ],
  validate,
  userController.updateUser
);

router.delete(
  '/:id',
  authorize(UserRole.SUPER_ADMIN),
  [param('id').isUUID()],
  validate,
  userController.deleteUser
);

export default router;
