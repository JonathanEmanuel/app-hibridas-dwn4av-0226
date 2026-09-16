import { Router } from 'express'
import CareerController from '../controllers/CarrerContoller.js'

const router = Router();
const controller = new CareerController();

router.get('/', controller.getAll);
router.get('/:cid', controller.getById);
router.post('/', controller.create);
router.get('/:cid/subjects', controller.getSubjectByCareer );
router.put('/:cid', controller.update);
router.delete('/:cid', controller.delete);


export default router