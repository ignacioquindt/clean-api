import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';

/**
 * Caso de Uso: Listar todas las citas.
 */
export class GetAppointments {
    constructor(private appointmentRepository: AppointmentRepository) { }

    public async execute(): Promise<Appointment[]> {
        return await this.appointmentRepository.findAll();
    }
}
