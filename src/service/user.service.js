import {status} from "../constants/status";
import ErrorMessage from "../helper/errorMessage";
import db from '../models'
import {getUserByEmail} from '../helper/helperFunction'
export const registerUserService = async (userBody) => {
  if (await getUserByEmail(userBody.email)) {
    throw new ErrorMessage(status.CONFLICT, 'Email is already exist')
  }
  let user =  await db.User.create(userBody);
  user = JSON.parse(JSON.stringify(user));
  delete user.password
  return user

};

export const updateUserService = async (userId, body) => {
  await db.User.update(body, {where: {
    id: userId
  }})
}

export const changePasswordService = async (userId, body) => {
  await db.User.update(body, {where: {
    id: userId
  }})
}