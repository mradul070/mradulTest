import joi from 'joi'
import errorMessage from '../helper/errorMessage';

export const registerUserValidation = async (req, res, next) => {
    const validation = joi.object().keys({
          email: joi.string().required().email(),
          password: joi.string().required().min(8).max(20),
          firstName: joi.string().required().min(3),
          lastName: joi.string().required().min(3)
    })
    const {error} = validation.validate(req.body)
    if (error) {
		res.status(NOT_ACCEPTABLE);
		return res.json(new errorMessage(NOT_ACCEPTABLE, error.message))
	} else {
		next();
	}
}
