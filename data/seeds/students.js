exports.seed = function(knex, Promise) {
    return knex('students').insert([
      { name: 'Frodo Baggings', cohort_id: 1 }, // 1
      { name: 'Samwise Gamgee', cohort_id: 2 }, // 2
      { name: 'Meriadoc Brandybuck', cohort_id: 3 }, // 3
      { name: 'Peregrin Took', cohort_id: 2 }, // 4
      { name: 'Mithrandir', cohort_id: 4 }
    ]);
  };