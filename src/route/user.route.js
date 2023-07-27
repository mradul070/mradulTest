import express from 'express'
import { registerUserValidation } from '../../validation/user.validation';
import  {registerUserController} from './../controller/user.controller'


const router = express.Router()
router.post('/register', registerUserValidation, registerUserController)

module.exports = router;
