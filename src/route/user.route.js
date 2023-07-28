import express from 'express'
import { registerUserValidation } from '../../validation/user.validation';
import  {registerUserController} from './../controller/user.controller'
import {tryCatch} from '../middleware/tryCatch'

const router = express.Router()
router.post('/register', registerUserValidation, tryCatch(registerUserController))

module.exports = router;
