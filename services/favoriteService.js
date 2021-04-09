const { getFavorite, addFavorite } = require('../models/favoriteModel');

const getFavoriteService = async (id) => getFavorite(id);
const addFavoriteService = async (fav) => addFavorite(fav);

module.exports = {
  getFavoriteService,
  addFavoriteService,
};