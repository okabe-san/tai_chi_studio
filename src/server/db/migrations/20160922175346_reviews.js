exports.up = (knex, Promise) => {
  knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.string('review').notNullable();
    table.integer('instructor_id').references('id').inTable('instructors').notNullable();
  });
};

exports.down = (knex, Promise) => {
  knex.schema.dropTable('reviews');
};
