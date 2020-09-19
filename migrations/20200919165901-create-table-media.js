'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('media', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNul: false
      },
      image: {
        type:Sequelize.STRING,
        allowNul: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNul: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNul: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('media');
  }
};
