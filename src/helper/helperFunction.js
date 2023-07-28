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