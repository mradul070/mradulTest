import {status} from "../constants/status";
import ErrorMessage from "../helper/errorMessage";
import db from '../models'
import {getUserByEmail} from '../helper/helperFunction'
const registerUserService = async (userBody) => {
  if (await getUserByEmail(userBody.email)) {
    throw new ErrorMessage(status.CONFLICT, 'Email is already exist')
  }
  let user =  await db.User.create(userBody);
  user = JSON.parse(JSON.stringify(user));
  delete user.password
  return user

};

module.exports = {
  registerUserService
}