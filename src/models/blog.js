'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blog.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    fk_file_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    fk_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};