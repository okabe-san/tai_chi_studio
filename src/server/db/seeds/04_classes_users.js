exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('class_user').insert({
      user_id: knex('user').where('id', 1).select('id'),
      class_id: knex('class').where('id', 1).select('id')
    }),
    knex('class_user').insert({
      user_id: knex('user').where('id', 2).select('id'),
      class_id: knex('class').where('id', 1).select('id')
    }),
    knex('class_user').insert({
      user_id: knex('user').where('id', 3).select('id'),
      class_id: knex('class').where('id', 1).select('id')
    })
  ]);
};
