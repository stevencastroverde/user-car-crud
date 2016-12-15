
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', function(table){
    table.increments();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.date('year').notNullable();
    table.string('color', 20);
    table.integer('user_id').unsigned().references('user.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('car');
};
