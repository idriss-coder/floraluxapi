'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('apis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      app_name: {
        type: Sequelize.STRING
      },
      hostname: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      jwt_key: {
        type: Sequelize.STRING
      },
      jwt_update_key: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('apis');
  }
};