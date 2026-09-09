import userRouter from './userRouter.js'
import subjectRouter from './subjectRouter.js'
import careerRouter from './careerRouter.js'

const routerAPI = ( app ) => {
    app.use('/api/users', userRouter);
    app.use('/api/subjects', subjectRouter);
    app.use('/api/career', careerRouter);

}

export default routerAPI;