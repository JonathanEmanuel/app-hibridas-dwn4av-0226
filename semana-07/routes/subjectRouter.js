import express from 'express';
import SubjectController from '../controllers/SubjectController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router()

const controller = new SubjectController();

router.get('/', authMiddleware,    controller.getAll  );
router.get('/:id', authMiddleware, controller.getById );
router.post('/',  authMiddleware,  controller.create  );
router.put('/:id', authMiddleware, controller.update  );
router.delete('/:id', authMiddleware, controller.delete);

export default router;