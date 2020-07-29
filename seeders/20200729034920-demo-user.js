'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bullkInsert('Stories', [
      { story_id: 1, story_value: 'Welcome to the Maze. Your main objective is to survive and escape. Be aware that each of your choices will affect your chances. Are you ready to proceed?' },
      { story_id: 2, story_value: 'You are heading to the survival shop to get some gear. The owner only has rope and a shovel. Which one do you pick?' }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Stories', null,{});
  }
};
