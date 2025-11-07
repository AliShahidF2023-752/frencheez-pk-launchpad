import jwt from 'jsonwebtoken';
import { UserRole } from '@prisma/client';

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
}

export const generateAccessToken = (payload: JWTPayload): string => {
  const secret = process.env.JWT_SECRET || 'default-secret';
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const generateRefreshToken = (payload: JWTPayload): string => {
  const secret = process.env.JWT_REFRESH_SECRET || 'default-refresh-secret';
  return jwt.sign(payload, secret, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string): JWTPayload => {
  const secret = process.env.JWT_SECRET || 'default-secret';
  return jwt.verify(token, secret) as JWTPayload;
};

export const verifyRefreshToken = (token: string): JWTPayload => {
  const secret = process.env.JWT_REFRESH_SECRET || 'default-refresh-secret';
  return jwt.verify(token, secret) as JWTPayload;
};
