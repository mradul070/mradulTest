const { status } = require("../constants/status");
const ErrorMessage = require("../helper/errorMessage");
const db = require("../models");

const registerUserService = async (userBody) => {
  return await db.User.create(userBody);

};

const checkEmail = async (email) => {
  return await db.User.findOne({where: {email}})
}

module.exports = {
  registerUserService
}