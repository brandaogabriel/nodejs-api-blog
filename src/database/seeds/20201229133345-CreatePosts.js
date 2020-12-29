module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Learning back-end with nodejs',
        theme: 'back-end',
        subject: 'Some nice subject will goes here...',
        tags: 'programming,nodejs,typescript,javascript',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Learning front-end with reactjs',
        theme: 'front-end',
        subject: 'Some nice subject will goes here...',
        tags: 'programming,html,css,javascript',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Learning SQL with Postgres',
        theme: 'sql',
        subject: 'Some nice subject will goes here...',
        tags: 'programming,structured query language',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async () => {},
};
