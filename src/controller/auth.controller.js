import passport, { use } from "passport"
import { generateToken } from "../helper/helperFunction"
import { status } from "../constants/status"

const login = async (req, res, next) => { 
    passport.authenticate('local', (err, user) => {
        console.log(err)
        if (err || !user) {
            return res.status(status.UNAUTHORIZED).json(err) 
        }
        console.log(user)
        const token = generateToken(user.id);
        const response = user.toJSON()
        delete response.password
        res.append('Authorization', token);
        return res.status(status.OK).json(response)
    })
  (req,res,next)
}


module.exports = {login}