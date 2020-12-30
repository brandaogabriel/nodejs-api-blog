import { Request, Response } from 'express';

import User from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    try {
      const user = await User.create(request.body);
      const { name, email } = user;
      return response.json({ name, email });
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new UserController();
