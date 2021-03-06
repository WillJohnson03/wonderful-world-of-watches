import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

// GET - localhost:3000/profiles
router.get('/', isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

// POST - localhost:3000/profiles/:id/watches
router.post('/:id/watches', isLoggedIn, profilesCtrl.addToMyWatchList)

// DELETE - localhost/3000/profiles/watches/:id
router.delete('/:profileId/watches/:watchId', isLoggedIn, profilesCtrl.delete)

export {
  router
}