'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert('Spots', [
      {
        name: 'Terrase',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Etage 1',
        createdAt: now,
        updatedAt: now
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
