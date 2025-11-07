import { Router } from 'express';
import { body, param } from 'express-validator';
import * as productController from '../controllers/product.controller';
import { authenticate, authorize } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { UserRole } from '@prisma/client';

const router = Router();

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', [param('id').isUUID()], validate, productController.getProductById);

// Admin routes
router.post(
  '/',
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [
    body('name').notEmpty().trim(),
    body('slug').notEmpty().trim(),
    body('price').isNumeric(),
    body('salePrice').optional().isNumeric(),
    body('sku').notEmpty().trim(),
    body('stock').isInt({ min: 0 }),
    body('categoryId').isUUID(),
    body('description').optional().trim(),
    body('images').optional().isArray(),
    body('isFeatured').optional().isBoolean(),
  ],
  validate,
  productController.createProduct
);

router.put(
  '/:id',
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [
    param('id').isUUID(),
    body('name').optional().trim(),
    body('slug').optional().trim(),
    body('price').optional().isNumeric(),
    body('salePrice').optional().isNumeric(),
    body('sku').optional().trim(),
    body('stock').optional().isInt({ min: 0 }),
    body('categoryId').optional().isUUID(),
    body('description').optional().trim(),
    body('images').optional().isArray(),
    body('isFeatured').optional().isBoolean(),
    body('isActive').optional().isBoolean(),
  ],
  validate,
  productController.updateProduct
);

router.delete(
  '/:id',
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [param('id').isUUID()],
  validate,
  productController.deleteProduct
);

export default router;
