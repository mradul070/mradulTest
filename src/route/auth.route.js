import express from 'express'
import {tryCatch} from '../middleware/tryCatch'
import { login } from "../controller/auth.controller"
import { loginValidation } from '../../validation/login.validation'

const router = express.Router()
router.post('/login', loginValidation, tryCatch(login))

module.exports = router;
