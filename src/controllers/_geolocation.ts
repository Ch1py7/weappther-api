import express from 'express'
import axios, { AxiosError } from 'axios'
import { Geolocation } from 'src/types/geolocation'

export const getGeolocation = async (req: express.Request, res: express.Response) => {
  try {
    const { lat, lon } = req.query

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`

    const response = await axios.get<Geolocation>(url)

    res.send(response.data)
  } catch (error: unknown | undefined) {
    console.error(error)
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error
      res.status(500).send({ error: axiosError.message })
    } else {
      res.status(500).send({ error: 'An error occurred while processing your request.' })
    }
  }
}
