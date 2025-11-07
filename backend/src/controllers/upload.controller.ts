import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../config/database';
import path from 'path';

export const uploadFile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    // Save file metadata to database
    const media = await prisma.media.create({
      data: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
        url: fileUrl,
      },
    });

    res.status(201).json({
      message: 'File uploaded successfully',
      file: {
        id: media.id,
        filename: media.filename,
        originalName: media.originalName,
        url: media.url,
        size: media.size,
      },
    });
  } catch (error) {
    console.error('Upload file error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

export const uploadMultipleFiles = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    
    if (!files || files.length === 0) {
      res.status(400).json({ error: 'No files uploaded' });
      return;
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const uploadedFiles = [];

    for (const file of files) {
      const fileUrl = `${baseUrl}/uploads/${file.filename}`;

      const media = await prisma.media.create({
        data: {
          filename: file.filename,
          originalName: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          path: file.path,
          url: fileUrl,
        },
      });

      uploadedFiles.push({
        id: media.id,
        filename: media.filename,
        originalName: media.originalName,
        url: media.url,
        size: media.size,
      });
    }

    res.status(201).json({
      message: 'Files uploaded successfully',
      files: uploadedFiles,
    });
  } catch (error) {
    console.error('Upload multiple files error:', error);
    res.status(500).json({ error: 'Failed to upload files' });
  }
};

export const getMedia = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const [media, total] = await Promise.all([
      prisma.media.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.media.count(),
    ]);

    res.json({
      media,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Get media error:', error);
    res.status(500).json({ error: 'Failed to get media' });
  }
};

export const deleteMedia = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const media = await prisma.media.findUnique({ where: { id } });

    if (!media) {
      res.status(404).json({ error: 'Media not found' });
      return;
    }

    // Delete file from filesystem
    const fs = require('fs');
    if (fs.existsSync(media.path)) {
      fs.unlinkSync(media.path);
    }

    // Delete from database
    await prisma.media.delete({ where: { id } });

    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    console.error('Delete media error:', error);
    res.status(500).json({ error: 'Failed to delete media' });
  }
};
