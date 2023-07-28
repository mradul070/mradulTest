import { config } from '../config'
import db from '../models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const getUserByEmail = async (email) => {
    return await db.User.findOne({where: {email}})
}

export const generateToken = (id) => {
    return jwt.sign({userId: id},
        config.secret, { expiresIn: '7d' }
    );
}

export const comparePassword = (password, savedPasspord) => {
    return bcrypt.compareSync(password, savedPasspord)
}

export const getToken =  (req,res) => {
	const header = req.headers.authorization
	if (!header) {
		return null
	}
	const parts = header.split(' ')
	if (parts.length !== 2) {
		return null
	}
	const scheme = parts[0]
	const token = parts[1]
	if (/^Bearer$/i.test(scheme)) {
		return token
	}
	return null
}