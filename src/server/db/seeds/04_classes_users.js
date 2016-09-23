exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('instructors').insert({
      id: 1,
      instructor_id: 1,
      class_id: 2
    }),
    knex('instructors').insert({
      id: 2,
      instructor_id: 2,
      class_id: 3
    }),
    knex('instructors').insert({
      id: 3,
      instructor_id: 3,
      class_id: 1
    })
  ]);
};
