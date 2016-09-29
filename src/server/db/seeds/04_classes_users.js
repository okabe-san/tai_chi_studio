exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('classes_users').insert({
      user_id: knex('users').where('id', 143).select('id'),
      class_id: knex('classes').where('id', 100).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 144).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 144).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 145).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 146).select('id'),
      class_id: knex('classes').where('id', 106).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 147).select('id'),
      class_id: knex('classes').where('id', 107).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 148).select('id'),
      class_id: knex('classes').where('id', 108).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 149).select('id'),
      class_id: knex('classes').where('id', 109).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 150).select('id'),
      class_id: knex('classes').where('id', 110).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 150).select('id'),
      class_id: knex('classes').where('id', 100).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 151).select('id'),
      class_id: knex('classes').where('id', 101).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 152).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 153).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 154).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 155).select('id'),
      class_id: knex('classes').where('id', 105).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 156).select('id'),
      class_id: knex('classes').where('id', 106).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 157).select('id'),
      class_id: knex('classes').where('id', 107).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 158).select('id'),
      class_id: knex('classes').where('id', 108).select('id')
    })
  ]);
};
