import { Appointment } from '../entities/Appointment';

/**
 * Puerto de Salida (Secondary Port)
 * Define un contrato estricto de QUÉ necesitamos que haga la base de datos,
 * pero no CÓMO lo hace.
 */
export interface AppointmentRepository {
    save(appointment: Appointment): Promise<void>;
    findById(id: string): Promise<Appointment | null>;
    findAll(): Promise<Appointment[]>;
}
