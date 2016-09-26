exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('instructors').insert({
      id: 1,
      name: 'Alias Montoya',
      biography: 'test',
      photo_url: 'test'
    }),
    knex('instructors').insert({
      id: 2,
      name: 'Gina DeBell',
      biography: 'test',
      photo_url: 'test'
    }),
    knex('instructors').insert({
      id: 3,
      name: 'Akiko Okabe',
      biography: 'test',
      photo_url: 'test'
    }),
    knex('instructors').insert({
      id: 4,
      name: 'Phil Benz',
      biography: 'BAMF',
      photo_url: 'test'
    })
  ]);
};
