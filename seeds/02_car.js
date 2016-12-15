
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM car; ALTER SEQUENCE car_id_seq RESTART WITH 1')
    .then(function () {
    const cars = [{
      make: 'Mazda',
      model:'3',
      year: '2010-01-01',
      color: 'gray',
      user_id: 1

    },
    {
      make:'Lexus',
      model: 'RX',
      year: '2016-01-01',
      color: 'gray',
      user_id: 1

},
{
  make: 'Mini',
  model: 'Cooper S',
  year: '2005-01-01',
  color: 'gray',
  user_id: 2



},
{
  make: 'Acura',
  model: 'RDX',
  year: '2013-01-01',
  color: 'black',
  user_id: 2



}
      ];
      return knex('car').insert(cars);
    });
};
