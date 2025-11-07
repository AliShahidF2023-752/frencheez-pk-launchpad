import { Router } from 'express';
import { param } from 'express-validator';
import * as uploadController from '../controllers/upload.controller';
import { authenticate, authorize } from '../middleware/auth';
import { validate } from '../middleware/validate';
import upload from '../config/upload';
import { UserRole } from '@prisma/client';

const router = Router();

// All routes require authentication
router.use(authenticate);

// Upload single file
router.post(
  '/single',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  upload.single('file'),
  uploadController.uploadFile
);

// Upload multiple files
router.post(
  '/multiple',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  upload.array('files', 10), // Max 10 files
  uploadController.uploadMultipleFiles
);

// Get all media
router.get(
  '/',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  uploadController.getMedia
);

// Delete media
router.delete(
  '/:id',
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  [param('id').isUUID()],
  validate,
  uploadController.deleteMedia
);

export default router;
