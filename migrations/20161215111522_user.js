
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table =>{
    table.increments();
    table.string('f_name', 50).notNullable();
    table.string('l_name', 50).notNullable();
    table.boolean('has_license').notNullable().defaultTo(true);
    table.text('email').unique().notNullable();
    table.text('password').notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
