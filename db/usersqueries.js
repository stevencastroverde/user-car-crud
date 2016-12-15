const knex = require('./knex');

function getUser (request){
return  knex('user')
  .where('id', request)
  .first();



}



module.exports = {
  getUser: getUser,





};
