
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('cohorts', table => {
          table.increments()
          table.text('name').notNullable().unique()
      })
      .createTable('students', table => {
          table.increments()
          table.text('name').notNullable().unique()
          table
              .integer('cohort_id').unsigned().notNullable()
              .references('id').inTable('cohorts')
      })
      
     
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('cohorts')
      .dropTableIfExists('students');
  };
  