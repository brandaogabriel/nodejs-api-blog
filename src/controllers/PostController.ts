import { Request, Response } from 'express';

import badRequest from '../helpers/httpHelper';
import Post from '../models/Post';

class PostController {
  async index(resquest: Request, response: Response) {
    try {
      const posts = await Post.findAll();
      return response.status(200).json(posts);
    } catch (e) {
      return response.status(400).json(badRequest(e));
    }
  }

  async store(request: Request, response: Response) {
    try {
      const post = await Post.create(request.body);
      return response.status(201).json(post);
    } catch (e) {
      return response.status(400).json(badRequest(e));
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json(badRequest('Missing id'));
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return response.status(400).json(badRequest('Post not found'));
      }

      return response.status(200).json(post);
    } catch (e) {
      return response.status(400).json(badRequest(e));
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { title, subject } = request.body;

      if (!id) {
        return response.status(400).json(badRequest('Missing id'));
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return response.status(400).json(badRequest('Post not found'));
      }

      const postUpdated = await post.update({ title, subject });

      return response.status(200).json(postUpdated);
    } catch (e) {
      return response.status(400).json(badRequest(e));
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json(badRequest('Missing id'));
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return response.status(400).json(badRequest('Post not found'));
      }

      await post.destroy();
      return response.status(200).json({ msg: 'Post removed' });
    } catch (e) {
      return response.status(400).json(badRequest(e));
    }
  }
}

export default new PostController();
