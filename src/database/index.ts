import Sequelize from 'sequelize';

const databaseConfig = require('../config/database');

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.connection = new Sequelize.Sequelize(databaseConfig);
  }
}

const dataBase = new Database();

export default dataBase;
