'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class online extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  online.init({
    fk_user_id: DataTypes.STRING,
    jwt_key: DataTypes.STRING,
    jwt_update_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'online',
  });
  return online;
};