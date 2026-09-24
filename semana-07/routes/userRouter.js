import express from 'express';
import UserController from '../controllers/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import roleMiddleware from '../middlewares/roleMiddleware.js'

const router = express.Router();
const controller = new UserController();
//                autenticado   && Autorizado
router.get('/',   authMiddleware,   roleMiddleware,   controller.getAll)
router.get('/:uid',  authMiddleware, roleMiddleware,  controller.getById)
router.put('/:uid',  authMiddleware, roleMiddleware,  controller.update)
router.post('/',     authMiddleware, authMiddleware,  controller.create)
router.delete('/:uid', authMiddleware, roleMiddleware, controller.delete)

export default router;