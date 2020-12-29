import Sequelize, { Model, DataType } from 'sequelize';
import bcryptjs from 'bcryptjs';

import database from '../database';

export default class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public password!: string;

  public passwordHash!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 255],
          msg: 'Name must have between 6 and 50 characters',
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: '',
      unique: {
        name: 'email',
        msg: 'Email already exist',
      },
      validate: {
        isEmail: {
          msg: 'Invalid email',
        },
      },
    },
    password: {
      type: Sequelize.VIRTUAL,
      defaultValue: '',
      validate: {
        len: {
          args: [6, 50],
          msg: 'Password must have between 6 and 50 characters',
        },
      },
    },
    passwordHash: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
  },
);

User.addHook(
  'beforeSave',
  async (user: User): Promise<void> => {
    if (user.password) {
      user.passwordHash = await bcryptjs.hash(user.password, 8);
    }
  },
);
