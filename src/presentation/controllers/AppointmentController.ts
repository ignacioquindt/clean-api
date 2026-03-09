import { Request, Response } from 'express';
import { CreateAppointment } from '../../application/use-cases/CreateAppointment';
import { GetAppointments } from '../../application/use-cases/GetAppointments';

/**
 * Adaptador de Interfaz: Controlador (Presentación)
 * Convierte el formato HTTP (Req/Res) al formato interno (Use Cases).
 * Este controlador recibe el Caso de Uso a través de su constructor (Inversión de dependencias).
 */
export class AppointmentController {
    constructor(
        private createAppointmentUseCase: CreateAppointment,
        private getAppointmentsUseCase: GetAppointments
    ) { }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const { patientName, doctorName, date } = req.body;

            const newAppointment = await this.createAppointmentUseCase.execute({
                patientName,
                doctorName,
                dateStr: date
            });

            res.status(201).json({
                message: 'Appointment created successfully',
                data: newAppointment
            });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const appointments = await this.getAppointmentsUseCase.execute();
            res.status(200).json({ data: appointments });
        } catch (error: any) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
