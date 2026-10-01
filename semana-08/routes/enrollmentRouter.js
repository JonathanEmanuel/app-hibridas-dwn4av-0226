import express from 'express';
import EnrollmentController from '../controllers/EnrollmentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router()
const controller = new EnrollmentController();

router.get('/',     authMiddleware,     controller.getAll);
router.get('/:eid', authMiddleware,     controller.getById);
router.post('/',    authMiddleware,     controller.create);



export default router;
