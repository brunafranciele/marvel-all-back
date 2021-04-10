const { getFavorite, addFavorite, deleteFavorite } = require('../models/favoriteModel');
const getFavoriteService = async (id) => getFavorite(id);
const addFavoriteService = async (fav) => addFavorite(fav);
const deleteFavoriteService = async (favorite_id) => deleteFavorite(favorite_id)
module.exports = {
  getFavoriteService,
  addFavoriteService,
  deleteFavoriteService
};