const faker = require('faker');

exports.seed = function(knex, Promise) {
    let numberOfArrays = new Array(20);
    let arrayOfUsers = []
    Array.from(numberOfArrays).map(() => {
        return createUsers(knex);
      });
    return Promise.all(arrayOfUsers);
  };

  function createUsers (knex) {
    return knex('users')
    .insert({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email_address: faker.internet.email(),
      address_line_1: faker.address.streetAddress(),
      address_line_2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      comments: faker.lorem.sentence()
    });
  }
