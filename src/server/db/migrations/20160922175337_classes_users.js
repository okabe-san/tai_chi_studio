exports.up = (knex, Promise) => {
  return knex.schema.createTable('class_user', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('user');
    table.integer('class_id').references('id').inTable('class');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('class_user');
};
