import { config } from '../config'
import db from '../models'
import {verify} from 'jsonwebtoken'
import { getToken } from '../helper/helperFunction'

export const validateUser =  async function (req,res, next) {
    const token = getToken(req,res)
	if (!token) {
		return next(401)
	}

	let decoded = null
	try {
        decoded = verify(token, config.secret)
	} catch (err) {
		return next(err)
	}
    console.log(decoded)
	let user = await db.User.findOne({where: {id: decoded.userId}})
    user = JSON.parse(JSON.stringify(user));
    delete user.password
    req.user = user
    if (!req.user) {
		return next(401)
	}
    console.log(req.user)

	return next()
}