import express from 'express'
import databaseService from '~/services/database.services'
import usersRouter from './routes/users.routes'

const app = express()
const port = 3000

app.use(express.json())

databaseService.connect()

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log('Server is running on port 3000')
})
