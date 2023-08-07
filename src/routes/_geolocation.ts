import { Router } from 'express'
import { getGeolocation } from '../controllers/_geolocation'

const router = Router()

router.get('/', getGeolocation)

export default router
