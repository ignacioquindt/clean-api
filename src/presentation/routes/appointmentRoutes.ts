import { Router } from 'express';
import { AppointmentController } from '../controllers/AppointmentController';
import { apiKeyMiddleware } from '../middlewares/apiKeyMiddleware';

// Factory function para inyectar las dependencias (el controlador armado)
export function getAppointmentRoutes(appointmentController: AppointmentController): Router {
    const router = Router();

    // El enrutador solo conoce los métodos del controlador manejando Req y Res.

    // POST /appointments (PROTEGIDO)
    router.post('/', apiKeyMiddleware, (req, res) => appointmentController.create(req, res));

    // GET /appointments (PÚBLICO)
    router.get('/', (req, res) => appointmentController.getAll(req, res));

    return router;
}
