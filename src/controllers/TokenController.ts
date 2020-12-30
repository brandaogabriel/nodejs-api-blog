import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import User from '../models/User';

class TokenController {
  async store(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      if (!email || !password) {
        return response.status(400).json({
          errors: ['Invalid email/password'],
        });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return response.status(400).json({
          error: 'User not found',
        });
      }

      if (!(await user.checkPassword(password))) {
        return response.status(401).json({
          error: 'Invalid password',
        });
      }

      const fakeToken = 'ae91ac25ddaf8dc2d5262b4ca83a9288';

      const { id } = user;
      const token = jwt.sign({ id, email }, fakeToken, { expiresIn: '1d' });

      return response.status(200).json({ token, email });
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new TokenController();
