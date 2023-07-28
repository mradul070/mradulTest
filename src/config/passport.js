import  LocalStrategy from 'passport-local';
import db from '../models'
import {comparePassword, getUserByEmail} from '../helper/helperFunction'
function initilize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email)
        if(user == null) {
            return done({message: 'No such email exist'}, false)
        }
        try {
            let isMatch = comparePassword(password, user.password)
			if (!isMatch) { return done({ message:'Incorrect password'}, false ) }
			done(null, user)
		} catch (err) {
			done(err)
		}
    }
    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, authenticateUser))
    passport.serializeUser((user, done) => { done(null, user.id) })
    passport.deserializeUser(async (id, done) => { 
        try {
            const user = await db.User.findOne({where: {id: id}})
            done(null, user)
        } catch (err) {
            done(err)
        }
    })
}

module.exports = initilize