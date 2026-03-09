import mongoose, { Schema, Document } from 'mongoose';
import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';

interface AppointmentDocument extends Document {
    patientName: string;
    doctorName: string;
    date: Date;
    status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
}

const AppointmentSchema = new Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    status: { 
        type: String, 
        enum: ['SCHEDULED', 'COMPLETED', 'CANCELLED'], 
        default: 'SCHEDULED' 
    }
}, { timestamps: true });

const AppointmentModel = mongoose.model<AppointmentDocument>('Appointment', AppointmentSchema);

export class MongoAppointmentRepository implements AppointmentRepository {
    async save(appointment: Appointment): Promise<void> {
        const appointmentData = {
            patientName: appointment.patientName,
            doctorName: appointment.doctorName,
            date: appointment.date,
            status: appointment.status
        };

        if (appointment.id && mongoose.Types.ObjectId.isValid(appointment.id)) {
            await AppointmentModel.findByIdAndUpdate(appointment.id, appointmentData, { upsert: true });
        } else {
            const newDoc = new AppointmentModel(appointmentData);
            await newDoc.save();
        }
    }

    async findById(id: string): Promise<Appointment | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        
        const doc = await AppointmentModel.findById(id);
        if (!doc) return null;

        return new Appointment({
            id: doc._id.toString(),
            patientName: doc.patientName,
            doctorName: doc.doctorName,
            date: doc.date,
            status: doc.status as any
        });
    }

    async findAll(): Promise<Appointment[]> {
        const docs = await AppointmentModel.find();
        return docs.map(doc => new Appointment({
            id: doc._id.toString(),
            patientName: doc.patientName,
            doctorName: doc.doctorName,
            date: doc.date,
            status: doc.status as any
        }));
    }
}
