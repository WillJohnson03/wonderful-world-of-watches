import { Router } from "express"
import * as watchesCtrl from '../controllers/watches.js'

const router = Router()

// GET - localhost/3000/watches
router.get('/', watchesCtrl.index)

export {
  router
}