/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Deletes ALL existing entries
  await knex('users').del()
  await knex('todos').del()

  // Insert new data
  await knex('users').insert([
    {id: 1, name: 'Budi', email: 'Budi@gmail.com', address: 'Kendal', phone: '08426562383263'},
    {id: 2, name: 'Andi', email: 'Andi@gmail.com', address: 'Jakarta', phone: '08111562383263'},
    {id: 3, name: 'Bella', email: 'Bella@gmail.com', address: 'Lampung', phone: '0848862383263'},
    {id: 4, name: 'Jasmine', email: 'Jasmine@gmail.com', address: 'Sabah', phone: '084555383263'},
    {id: 5, name: 'Sekar', email: 'Budi@gmail.com', address: 'Depok', phone: '0899962383263'},
  ])
  await knex('todos').insert([
    {id: 1, user_id: 1, title: "Teori android jetpack compose", body: "Belajar side effect dari jetpack compose",},
    {id: 2, user_id: 1, title: "Coding android jetpack compose", body: "Mengerjakan aplikasi clone whatsapp",},
    {id: 3, user_id: 2, title: "Teori dan coding Graphql", body: "Belajar terori dan coding graphql",},
    {id: 4, user_id: 3, title: "Belajar react", body: "Belajar terori react js dari dokumentasi resmi dan video yt codevolution",},
    {id: 5, user_id: 4, title: "Coding react js app", body: "Melanjutkan proyek clone facebook",},
  ]);
};
