'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Générer un mot de passe haché
    const hashedPassword = await bcrypt.hash('motdepasse', 10);
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        role: 'admin',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
        password: hashedPassword,
        createdAt: now,
        updatedAt: now
      },
      {
        role: 'client',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phoneNumber: '1234567890',
        password: hashedPassword,
        createdAt: now,
        updatedAt: now
      },
      
      // Ajoutez d'autres utilisateurs selon vos besoins...
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
