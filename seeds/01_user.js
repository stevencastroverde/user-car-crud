
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
    .then(function () {
        const users = [{
          id: 1,
          f_name: 'Steven',
          l_name: 'Castroverde',
          email: 'steven.castroverde@gmail.com',
          password: 'poop'
        }, {
          id: 2,
          f_name: 'Matt',
          l_name: 'Seaton',
          email: 'matt.r.seaton@gmail.com',
          password: 'butt'
        }];
        return knex('user').insert(users);
    });
};
