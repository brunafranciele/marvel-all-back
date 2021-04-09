const { getFavorite } = require('../models/favoriteModel');

const getFavoriteService = async (id) => getFavorite(id);
module.exports = {
  getFavoriteService,
};