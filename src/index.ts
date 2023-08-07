import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import city from './routes/_city'
import geolocation from './routes/_geolocation'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/health', (_, res) => {
  res.send({ status: 'ok' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

app.use('/api/city', city)
app.use('/api/geolocation', geolocation)

export default app
