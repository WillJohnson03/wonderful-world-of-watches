import { Router } from "express"
import * as watchesCtrl from '../controllers/watches.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// GET - localhost/3000/watches
router.get('/', watchesCtrl.index)
// GET - localhost/3000/watches/new
router.get('/new', isLoggedIn, watchesCtrl.new)
// GET - localhost/3000/watches/:id
router.get('/:id', watchesCtrl.show)
// GET - localhost/3000/watches/:id/edit
router.get('/:id/edit', isLoggedIn, watchesCtrl.edit)

// POST - localhost/3000/watches
router.post('/', isLoggedIn, watchesCtrl.create)

// DELETE - localhost/3000/watches/:id
router.delete('/:id', isLoggedIn, watchesCtrl.delete)

// PUT - localhost:3000/watches/:id
router.put('/:id', watchesCtrl.update)

export {
  router
}