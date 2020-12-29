import { Request, Response } from 'express';

import badRequest from '../helpers/httpHelper';

import User from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    try {
      const user = await User.create(request.body);
      const { name, email } = user;
      return response.json({ name, email });
    } catch (e) {
      return response.status(400).json(badRequest(e));
    }
  }
}

export default new UserController();
