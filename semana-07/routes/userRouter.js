import express from 'express';
import UserController from '../controllers/userController.js'
const router = express.Router();
const controller = new UserController();

router.get('/',         controller.getAll)
router.get('/:uid',      controller.getById)
router.put('/:uid',      controller.update)
router.post('/',        controller.create)
router.delete('/:uid',   controller.delete)

export default router;