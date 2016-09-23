exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('classes_users').insert({
      user_id: knex('users').where('id', 1).select('id'),
      class_id: knex('classes').where('id', 1).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 2).select('id'),
      class_id: knex('classes').where('id', 1).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 3).select('id'),
      class_id: knex('classes').where('id', 1).select('id')
    })
  ]);
};
