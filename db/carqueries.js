const knex = require('./knex');

module.exports = {
  getCarsById: function(id){
    return knex('car').where('user_id', id);
  }
};
