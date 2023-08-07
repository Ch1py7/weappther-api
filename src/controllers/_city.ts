import express from 'express'
import { City } from 'src/types/city'

export const getCityWeather = async (req: express.Request, res: express.Response) => {
  try {
    const { city } = req.query

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`

    const response = await fetch(url)
    const data: City = await response.json()

    res.send(data)
  } catch (error: unknown | undefined) {
    console.error(error)
    res.status(500).send({ error: 'An error occurred while processing your request.' })
  }
}
