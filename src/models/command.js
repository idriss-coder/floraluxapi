'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class command extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  command.init({
    fk_user_id: DataTypes.INTEGER,
    fk_article_id: DataTypes.INTEGER,
    qtt: DataTypes.INTEGER,
    solved: DataTypes.BOOLEAN,
    fk_payement_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'command',
  });
  return command;
};