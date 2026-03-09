export interface AppointmentProps {
    id?: string;
    patientName: string;
    doctorName: string;
    date: Date;
    status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
}

/**
 * Domain Entity: Appointment
 * Representa una regla de negocio central. No sabe nada de bases de datos
 * ni de cómo fue creada (REST, GraphQL, CLI, etc.).
 */
export class Appointment {
    public readonly id: string;
    public patientName: string;
    public doctorName: string;
    public date: Date;
    public status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';

    constructor(props: AppointmentProps) {
        // Si no tiene ID, se asume que es una nueva cita (generamos un ID rudimentario, en DB sería un UUID)
        this.id = props.id || Math.random().toString(36).substring(2, 9);
        this.patientName = props.patientName;
        this.doctorName = props.doctorName;
        this.date = props.date;
        this.status = props.status || 'SCHEDULED';
    }

    // Ejemplo de regla de negocio exclusiva de esta entidad:
    public cancel(): void {
        if (this.status === 'COMPLETED') {
            throw new Error("No se puede cancelar una cita médica que ya fue completada.");
        }
        this.status = 'CANCELLED';
    }
}
