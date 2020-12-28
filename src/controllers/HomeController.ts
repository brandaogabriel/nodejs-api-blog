import { Request, Response } from 'express';

class HomeController {
  async index(request: Request, response: Response) {
    return response.json({ msg: 'home controller' });
  }
}

export default new HomeController();
