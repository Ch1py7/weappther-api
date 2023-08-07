import { Router } from 'express'
import { getCurrent } from '../controllers/_current'

const router = Router()

router.get('/', getCurrent)

export default router
