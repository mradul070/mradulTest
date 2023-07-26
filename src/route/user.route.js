import express from 'express'
import validation from '../../validation/user.validation';

const router = express.Router()
router.post('/register', validation.createUserValidation, (req, res, next) => {
    console.log('user register')
})

module.exports = router;
