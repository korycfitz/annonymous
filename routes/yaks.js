import { Router } from 'express'
import * as yaksCtrl from '../controllers/yaks.js'

const router = Router()

// GET localhost:3000/yaks
router.get('/', yaksCtrl.index)
// GET /yaks/new
router.get('/new', yaksCtrl.new)
// POST /yaks
router.post('/', yaksCtrl.create)
router.post('/:yakId/comments', yaksCtrl.createComment)
router.get('/:yakId', yaksCtrl.show)
// localhost:3000/yaks/:yakId
router.delete("/:yakId", yaksCtrl.delete)
// localhost:3000/yaks/:yakId/edit
router.get("/:yakId/edit", yaksCtrl.edit)
// localhost:3000/yaks/:yakId
router.put("/:yakId", yaksCtrl.update)

export {
	router
}