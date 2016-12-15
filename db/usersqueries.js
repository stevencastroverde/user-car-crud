const knex = require('./knex');

function getUser (request){
return  knex('user')
  .where('id', request)



}



module.exports = {
  getUser: getUser,





};
