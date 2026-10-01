import express from 'express';
import CommissionController from '../controllers/CommissionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router()
const controller = new CommissionController();

router.get('/',     authMiddleware,     controller.getAll);
router.get('/:cid', authMiddleware,     controller.getById);
router.post('/',    authMiddleware,     controller.create);



export default router;
