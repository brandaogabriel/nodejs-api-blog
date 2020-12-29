import Sequelize, { Model } from 'sequelize';

import User from './User';
import database from '../database';

export default class Post extends Model {
  public id!: number;

  public title!: string;

  public theme!: string;

  public subject!: string;

  public tags!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 30],
          msg: 'Title must have between 3 and 30 characters',
        },
      },
    },
    theme: {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 15],
          msg: 'Theme must have between 3 and 15 characters',
        },
      },
    },
    subject: {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [5, 255],
          msg: 'Subject must have between 5 and 255 characters',
        },
      },
    },
    tags: {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 100],
          msg: 'Tags must have between 3 and 100 characters',
        },
      },
    },
  },
  {
    sequelize: database.connection,
  },
);

Post.hasOne(User);
