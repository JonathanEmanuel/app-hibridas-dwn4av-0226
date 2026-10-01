import userRouter from './userRouter.js'
import subjectRouter from './subjectRouter.js'
import careerRouter from './careerRouter.js'
import authRouter from './authRouter.js'
import commissionRouter from './commissionRouter.js'
import enrollmentRouter from './enrollmentRouter.js'

const routerAPI = ( app ) => {
    app.use('/api/users',   userRouter);
    app.use('/api/auth',    authRouter);
    app.use('/api/subjects', subjectRouter);
    app.use('/api/career',  careerRouter);
    app.use('/api/commissions', commissionRouter);
    app.use('/api/enrollment',  enrollmentRouter);
}

export default routerAPI;