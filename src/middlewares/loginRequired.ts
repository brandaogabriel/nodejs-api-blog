import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/User';

interface TokenPayload {
  id: number;
  email: string;
}

export default async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ['Login required.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = jwt.verify(token, 'ae91ac25ddaf8dc2d5262b4ca83a9288');
    const { id, email } = decoded as TokenPayload;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return response.status(401).json({
        errors: ['Invalid user'],
      });
    }

    request.user = { id };
    return next();
  } catch (e) {
    return response.status(401).json({
      errors: ['Invalid token'],
    });
  }
};
