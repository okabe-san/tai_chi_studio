exports.up = (knex, Promise) => {
  return knex.schema.createTable('review', (table) => {
    table.increments();
    table.text('review').notNullable();
    table.integer('instructor_id').references('id').inTable('instructor').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('review');
};
