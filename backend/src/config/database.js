module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'go-barder',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
