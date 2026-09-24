import { Router } from 'express'
import CareerController from '../controllers/CarrerContoller.js'
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddlware from '../middlewares/roleMiddleware.js';

const router = Router();
const controller = new CareerController();

router.get('/',     controller.getAll);
router.get('/:cid', authMiddleware, controller.getById);
router.post('/',    authMiddleware, roleMiddlware,   controller.create);
router.get('/:cid/subjects', controller.getSubjectByCareer );
router.put('/:cid', authMiddleware, roleMiddlware,    controller.update);
router.delete('/:cid', authMiddleware, roleMiddlware, controller.delete);

export default router