import joi from 'joi'
import errorMessage from '../src/helper/errorMessage';

export const loginValidation = async (req, res, next) => {
    const validation = joi.object().keys({
          email: joi.string().required().email(),
          password: joi.string().required().min(8).max(20)
    })
    const {error} = validation.validate(req.body)
    if (error) {
		res.status(NOT_ACCEPTABLE);
		return res.json(new errorMessage(NOT_ACCEPTABLE, error.message))
	} else {
		next();
	}
}
