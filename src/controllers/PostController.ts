import { Request, Response } from 'express';

import Post from '../models/Post';

class PostController {
  async index(request: Request, response: Response) {
    try {
      const { theme } = request.query;
      const posts = await Post.findAll();

      let result = posts;

      if (theme && typeof theme === 'string') {
        result = posts.filter(post => post.theme.includes(theme));
      }

      return response.status(200).json(result);
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  async store(request: Request, response: Response) {
    try {
      const req = {
        title: request.body.title,
        theme: request.body.theme,
        subject: request.body.subject,
        tags: request.body.tags,
        user_id: request.user.id,
      };

      const post = await Post.create(req);
      return response.status(201).json(post);
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({ error: 'Missing id' });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return response.status(400).json({ error: 'Post not found' });
      }

      return response.status(200).json(post);
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { title, subject } = request.body;

      if (!id) {
        return response.status(400).json({ error: 'Missing id' });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return response.status(400).json({ error: 'Post not found' });
      }

      const userId = request.user.id;

      if (!(post.user_id === userId)) {
        return response
          .status(401)
          .json({ error: 'You are not the author of the post' });
      }

      const postUpdated = await post.update({ title, subject });

      return response.status(200).json(postUpdated);
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({ error: 'Missing id' });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return response.status(400).json({ error: 'Post not found' });
      }

      const userId = request.user.id;

      if (!(post.user_id === userId)) {
        return response
          .status(401)
          .json({ error: 'You are not the author of the post' });
      }

      await post.destroy();
      return response.status(200).json({ msg: 'Post removed' });
    } catch (e) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new PostController();
