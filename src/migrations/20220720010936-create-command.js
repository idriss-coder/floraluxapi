'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_user_id: {
        type: Sequelize.INTEGER
      },
      fk_article_id: {
        type: Sequelize.INTEGER
      },
      qtt: {
        type: Sequelize.INTEGER
      },
      solved: {
        type: Sequelize.BOOLEAN
      },
      fk_payement_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('commands');
  }
};