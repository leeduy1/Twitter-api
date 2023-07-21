import express, { Request, Response, NextFunction } from 'express'
import databaseService from '~/services/database.services'
import usersRouter from './routes/users.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'

databaseService.connect()

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log('Server is running on port 3000')
})
