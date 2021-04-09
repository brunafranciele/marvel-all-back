const connection = require('./connection');

const getFavorite = async (id) => {
  const [favorite] = await connection.query('SELECT * FROM favorite where user_id = ?', [id]);
  return favorite;
};

const addFavorite = async (favorite) => {
  const { id_favorite, name, url_image, user_id } = favorite;
  return connection.query('INSERT INTO favorite (id_favorite, name, url_image, user_id) VALUES (?, ?, ?, ?)', [id_favorite, name, url_image, user_id])
  .then((result) => result[0]);
};

const getByUserId = async (user_id) => {
  const [user] = await connection.query('SELECT id_favorite FROM favorite where user_id = ?', [user_id]);
  return user;
};

module.exports = {
  getFavorite,
  addFavorite,
  getByUserId
};
