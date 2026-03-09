import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';

/**
 * Adaptador / Implementación Real del Repositorio (Infraestructura)
 * Aquí es donde el código "sabe" que está guardando en memoria.
 * Mañana, podríamos crear un MongoAppointmentRepository conectando a MongoDB
 * sin tocar ni los Casos de Uso (Application) ni las Entidades (Domain).
 */
export class InMemoryAppointmentRepository implements AppointmentRepository {
    // Simulamos nuestra DB con un array en RAM
    private appointments: Appointment[] = [];

    public async save(appointment: Appointment): Promise<void> {
        const existingIndex = this.appointments.findIndex(a => a.id === appointment.id);
        if (existingIndex !== -1) {
            // Si existe lo actualiza (simulando un UPSERT)
            this.appointments[existingIndex] = appointment;
        } else {
            // Si no existe, lo agrega
            this.appointments.push(appointment);
        }
    }

    public async findById(id: string): Promise<Appointment | null> {
        const found = this.appointments.find(a => a.id === id);
        return found || null;
    }

    public async findAll(): Promise<Appointment[]> {
        return this.appointments;
    }
}
