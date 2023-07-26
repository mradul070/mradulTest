import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import {config} from './src/config'
const app = express()

app.use(helmet())
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})