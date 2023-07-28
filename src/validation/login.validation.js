import joi from 'joi'
import errorMessage from '../helper/errorMessage';
import { status } from '../constants/status';


export const loginValidation = async (req, res, next) => {
    const validation = joi.object().keys({
          email: joi.string().required().email(),
          password: joi.string().required().min(8).max(20)
    })
    const {error} = validation.validate(req.body)
    if (error) {
		res.status(status.NOT_ACCEPTABLE);
		return res.json(new errorMessage(status.NOT_ACCEPTABLE, error.message))
	} else {
		next();
	}
}
