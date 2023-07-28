import express from 'express'
import { registerUserValidation, updateUserValidation, changePasswordValidation } from '../validation/user.validation';
import  {registerUserController, userProfileController, updateUserController, changePasswordController} from './../controller/user.controller'
import {tryCatch} from '../middleware/tryCatch'
import { validateUser } from '../middleware/validateUser';

const router = express.Router()
router.post('/register', registerUserValidation, tryCatch(registerUserController))

router.get('/profile', validateUser, tryCatch(userProfileController))

router.patch('/', updateUserValidation, validateUser,  tryCatch(updateUserController))

router.patch('/change_password', changePasswordValidation, validateUser,  tryCatch(changePasswordController))

module.exports = router;
