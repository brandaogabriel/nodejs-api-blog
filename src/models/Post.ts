import { Model, DataTypes } from 'sequelize';
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
      type: new DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(80),
      allowNull: false,
    },
    theme: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    subject: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    tags: {
      type: new DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize: database.connection,
  },
);
