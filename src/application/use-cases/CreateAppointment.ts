import { Appointment, AppointmentProps } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';

// Data Transfer Object del Caso de Uso (Evita que la UI mande un objeto de la base de datos directo aquí)
export interface CreateAppointmentRequestDTO {
    patientName: string;
    doctorName: string;
    dateStr: string; // Recibimos la fecha como string por HTTP
}

/**
 * Caso de Uso: Interactor (Application Logic)
 * Coordina clases, llama a la base de datos, devuelve resultados.
 */
export class CreateAppointment {
    // Inyección de dependencias estricta: No instanciamos la DB aquí, nos la inyectan.
    // Solo dependemos de la interfaz (Abstracción).
    constructor(private appointmentRepository: AppointmentRepository) { }

    public async execute(request: CreateAppointmentRequestDTO): Promise<Appointment> {
        const { patientName, doctorName, dateStr } = request;

        // Validación básica de capa de aplicación
        if (!patientName || !doctorName || !dateStr) {
            throw new Error("Missing required fields");
        }

        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date format");
        }

        // Instanciamos la Entidad de Dominio real
        const props: AppointmentProps = { patientName, doctorName, date, status: 'SCHEDULED' };
        const appointment = new Appointment(props);

        // Guardamos usando la interfaz abstracta
        await this.appointmentRepository.save(appointment);

        return appointment;
    }
}
