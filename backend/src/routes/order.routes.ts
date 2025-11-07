import { Router } from 'express';
import { body, param } from 'express-validator';
import * as orderController from '../controllers/order.controller';
import { authenticate, authorize } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { UserRole } from '@prisma/client';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.post(
  '/',
  [
    body('items').isArray({ min: 1 }),
    body('items.*.productId').isUUID(),
    body('items.*.quantity').isInt({ min: 1 }),
    body('shippingAddress').isObject(),
    body('billingAddress').optional().isObject(),
    body('notes').optional().trim(),
  ],
  validate,
  orderController.createOrder
);

router.get('/', orderController.getOrders);

router.get(
  '/:id',
  [param('id').isUUID()],
  validate,
  orderController.getOrderById
);

router.put(
  '/:id/status',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [
    param('id').isUUID(),
    body('status').isIn(['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED']),
  ],
  validate,
  orderController.updateOrderStatus
);

export default router;
