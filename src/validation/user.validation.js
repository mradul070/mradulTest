import joi from 'joi'
import errorMessage from '../helper/errorMessage';
import { status } from '../constants/status';

export const registerUserValidation = async (req, res, next) => {
    const validation = joi.object().keys({
          email: joi.string().required().email(),
          password: joi.string().required().min(8).max(20),
          firstName: joi.string().required().min(3),
          lastName: joi.string().required().min(3)
    })
    const {error} = validation.validate(req.body)
    if (error) {
		res.status(status.NOT_ACCEPTABLE);
		return res.json(new errorMessage(status.NOT_ACCEPTABLE, error.message))
	} else {
		next();
	}
}

export const updateUserValidation = async (req, res, next) => {
      const validation = joi.object().keys({
            firstName: joi.string().required().min(3),
            lastName: joi.string().required().min(3)
      })
      const {error} = validation.validate(req.body)
      if (error) {
              res.status(status.NOT_ACCEPTABLE);
              return res.json(new errorMessage(status.NOT_ACCEPTABLE, error.message))
        } else {
              next();
        }
}


export const changePasswordValidation = async (req, res, next) => {
      const validation = joi.object().keys({
            password: joi.string().required().min(8).max(20),
            confirmPassword: joi.string().required().min(8).max(20).valid(joi.ref('password'))
      })
      const {error} = validation.validate(req.body)
      if (error) {
              res.status(status.NOT_ACCEPTABLE);
              return res.json(new errorMessage(status.NOT_ACCEPTABLE, error.message))
        } else {
              next();
      }
  }