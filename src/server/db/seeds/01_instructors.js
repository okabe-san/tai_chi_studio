exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('instructor').insert({
      id: 1,
      names: 'Alias Montoya',
      biography: 'test',
      photo_url: 'test'
    }),
    knex('instructor').insert({
      id: 2,
      names: 'Gina DeBell',
      biography: 'test',
      photo_url: 'test'
    }),
    knex('instructor').insert({
      id: 3,
      names: 'Akiko Okabe',
      biography: 'test',
      photo_url: 'test'
    })
  ]);
};
