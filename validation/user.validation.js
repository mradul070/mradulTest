import joi from 'joi'
import errorMessage from '../helper/errorMessage';

const createUserValidation = async (req, res, next) => {
    const validation = joi.object().keys({
          email: joi.string().required().email(),
          password: joi.string().required().min(8).max(20),
          name: joi.string().required().min(3)
    })
    const {error} = validation.validate(req.body)
    if (error) {
		res.status(406);
		return res.json(errorMessage(error))
	} else {
		next();
	}
}




module.exports = {
    createUserValidation,
}