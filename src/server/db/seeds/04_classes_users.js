exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('classes_users').insert({
      user_id: knex('users').where('id', 1).select('id'),
      class_id: knex('classes').where('id', 1).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 2).select('id'),
      class_id: knex('classes').where('id', 2).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 3).select('id'),
      class_id: knex('classes').where('id', 3).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 4).select('id'),
      class_id: knex('classes').where('id', 1).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 5).select('id'),
      class_id: knex('classes').where('id', 2).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 6).select('id'),
      class_id: knex('classes').where('id', 3).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 7).select('id'),
      class_id: knex('classes').where('id', 1).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 8).select('id'),
      class_id: knex('classes').where('id', 2).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 9).select('id'),
      class_id: knex('classes').where('id', 3).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 10).select('id'),
      class_id: knex('classes').where('id', 5).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id',11).select('id'),
      class_id: knex('classes').where('id', 6).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 12).select('id'),
      class_id: knex('classes').where('id', 7).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 13).select('id'),
      class_id: knex('classes').where('id', 5).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id',14).select('id'),
      class_id: knex('classes').where('id', 6).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 15).select('id'),
      class_id: knex('classes').where('id', 7).select('id')
    })
  ]);
};
