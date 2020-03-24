
exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Lisa', password: '1234', department: 'Programming'},
        {id: 2, username: 'Lucas', password: '5678', department: 'Healthcare'},
        {id: 3, username: 'Lacey', password: '4321', department: 'Hairballs'}
      ]);
 
};
