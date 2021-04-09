const connection = require('./connection');

const getFavorite = async (id) => {
  const [favorite] = await connection.query('SELECT * FROM favorite where user_id = ?', [id]);
  return favorite;
};

module.exports = {
  getFavorite,
};