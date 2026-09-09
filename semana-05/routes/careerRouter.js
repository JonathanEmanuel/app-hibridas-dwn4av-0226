import { Router } from 'express'
import CareerController from '../controllers/CarrerContoller.js'

const router = Router();
const controller = new CareerController();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:sid/subjects', controller.getSubjectByCareer );


export default router