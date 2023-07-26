import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import {config} from './src/config'
import router from './src/route'
const app = express()

app.use(helmet())
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/v1', router)
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})