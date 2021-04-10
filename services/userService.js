const { addUser, getUserById, getUserByEmail } = require('../models/userModel');

const addUserService = async (user) => {
  const verifyEmail = await getUserByEmail(user.email);
  if (verifyEmail.length) return false;
  const response = await addUser(user);
  return response;
}

const getUserByIdService = async (id) => getUserById(id);

module.exports = {
  addUserService,
  getUserByIdService,
};