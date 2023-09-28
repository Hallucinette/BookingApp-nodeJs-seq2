'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert('Rooms', [
      {
        name: 'Room 1',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Room 2',
        createdAt: now,
        updatedAt: now
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
