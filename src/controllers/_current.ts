import express from 'express'
import { CurrentLocation } from 'src/types/current'

export const getCurrentWeather = async (req: express.Request, res: express.Response) => {
  try {
    const { lat, lon } = req.query

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`

    const response = await fetch(url)
    const data: CurrentLocation = await response.json()

    res.send(data)
  } catch (error: unknown | undefined) {
    console.error(error)
    res.status(500).send({ error: 'An error occurred while processing your request.' })
  }
}
