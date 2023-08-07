import { Router } from 'express'
import { getCityWeather } from '../controllers/_city'

const router = Router()

router.get('/', getCityWeather)

export default router
