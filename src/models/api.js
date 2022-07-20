'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class api extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  api.init({
    app_name: DataTypes.STRING,
    hostname: DataTypes.STRING,
    logo: DataTypes.STRING,
    jwt_key: DataTypes.STRING,
    jwt_update_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'api',
  });
  return api;
};