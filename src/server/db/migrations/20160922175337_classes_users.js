exports.up = (knex, Promise) => {
  knex.schema.createTable('classes_users', (table) => {
    table.increments();
    table.integer('instructor_id').references('id').inTable('instructors');
    table.integer('class_id').references('id').inTable('classes');
  });
};

exports.down = (knex, Promise) => {
  knex.schema.dropTable('classes_users');
};
