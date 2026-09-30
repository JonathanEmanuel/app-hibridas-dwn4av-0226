import express from 'express';
import SubjectController from '../controllers/SubjectController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddlware from '../middlewares/roleMiddleware.js';
const router = express.Router()

const controller = new SubjectController();

router.get('/', authMiddleware,    controller.getAll  );
router.get('/:id', authMiddleware, controller.getById );
router.post('/',  authMiddleware, roleMiddlware,  controller.create  );
router.put('/:id', authMiddleware, roleMiddlware, controller.update  );
router.delete('/:id', authMiddleware, roleMiddlware, controller.delete);

export default router;