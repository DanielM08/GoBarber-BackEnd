import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsControler from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsControler = new AppointmentsControler();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsControler.create);

export default appointmentsRouter;
