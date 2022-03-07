import { Router } from "express"
import * as watchesCtrl from '../controllers/watches.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// GET - localhost/3000/watches
router.get('/', watchesCtrl.index)
// GET - localhost/3000/watches/new
router.get('/new', isLoggedIn, watchesCtrl.new)

export {
  router
}