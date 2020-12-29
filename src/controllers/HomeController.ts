import { Request, Response } from 'express';

import Post from '../models/Post';

interface FormattedPost {
  title: string;
  theme: string;
  tags: string;
}

class HomeController {
  async index(request: Request, response: Response) {
    const posts = await Post.findAll();
    const formattedPosts: FormattedPost[] = [];

    posts.forEach(post => {
      formattedPosts.push({
        title: post.title,
        theme: post.theme,
        tags: post.tags,
      });
    });

    return response.status(200).json(formattedPosts);
  }
}

export default new HomeController();
