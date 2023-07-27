import joi from 'joi'
import errorMessage from '../src/helper/errorMessage';

export const registerUserValidation = async (req, res, next) => {
    const validation = joi.object().keys({
          email: joi.string().required().email(),
          password: joi.string().required().min(8).max(20),
          firstName: joi.string().required().min(3),
          lastName: joi.string().required().min(3)
    })
    const {error} = validation.validate(req.body)
    if (error) {
		res.status(406);
		return res.json(errorMessage(406, error))
	} else {
		next();
	}
}
