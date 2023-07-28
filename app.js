import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import {config} from './src/config'
import router from './src/route'
import { handleError } from './src/middleware/error'
import passport from 'passport'
import initialize from './src/config/passport'
import session from 'express-session'
const app = express()

app.use(helmet())
app.use(cors())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
}));
  

app.use(express.json())
initialize(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({ extended: true }))

app.use('/v1', router)
app.use(handleError)
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})