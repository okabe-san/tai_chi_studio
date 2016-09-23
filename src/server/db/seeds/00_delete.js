exports.seed = function(knex, Promise) {
  return knex('review').del()
  .then(() => knex('class_user').del())
  .then(() => knex('user').del())
  .then(() => knex('class').del())
  .then(() => knex('instructor').del());
};
