exports.seed = function(knex, Promise) {
    return knex('cohorts').insert([
      { name: 'Joe Pesci' }, 
      { name: 'Special One' }, 
      { name: 'Silver Bullet' }, // 3
      { name: 'Jean-Luc Picard' }, // 4
      { name: 'Jon Snow' }
    ]);
};