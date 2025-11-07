import { Router } from 'express';
import { body, param } from 'express-validator';
import * as categoryController from '../controllers/category.controller';
import { authenticate, authorize } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { UserRole } from '@prisma/client';

const router = Router();

// Public routes
router.get('/', categoryController.getAllCategories);
router.get('/:id', [param('id').isUUID()], validate, categoryController.getCategoryById);

// Admin routes
router.post(
  '/',
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [
    body('name').notEmpty().trim(),
    body('slug').notEmpty().trim(),
    body('description').optional().trim(),
    body('image').optional().trim(),
    body('parentId').optional().isUUID(),
  ],
  validate,
  categoryController.createCategory
);

router.put(
  '/:id',
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [
    param('id').isUUID(),
    body('name').optional().trim(),
    body('slug').optional().trim(),
    body('description').optional().trim(),
    body('image').optional().trim(),
    body('parentId').optional().isUUID(),
  ],
  validate,
  categoryController.updateCategory
);

router.delete(
  '/:id',
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [param('id').isUUID()],
  validate,
  categoryController.deleteCategory
);

export default router;
