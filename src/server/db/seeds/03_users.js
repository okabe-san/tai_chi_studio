const faker = require('faker');

exports.seed = function(knex, Promise) {
    let numberOfArrays = new Array(20);
    let arrayOfuser = Array.from(numberOfArrays).map(() => {
      return createUser(knex);
    });
    return Promise.all(arrayOfuser);
  };

function createUser (knex) {
  return knex('user')
    .insert({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      address_line_1: faker.address.streetAddress(),
      address_line_2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      comments: faker.lorem.sentence(),
      password: 'password'
    });
}
