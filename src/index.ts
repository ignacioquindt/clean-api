import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoAppointmentRepository } from './infrastructure/database/MongoAppointmentRepository';
import { CreateAppointment } from './application/use-cases/CreateAppointment';
import { GetAppointments } from './application/use-cases/GetAppointments';
import { AppointmentController } from './presentation/controllers/AppointmentController';
import { getAppointmentRoutes } from './presentation/routes/appointmentRoutes';

import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());
// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ Error: MONGODB_URI no está definido en el archivo .env');
    process.exit(1);
}



// 1. Instanciamos Base de Datos (Infraestructura)
const appointmentRepository = new MongoAppointmentRepository();

// 2. Instanciamos Casos de Uso inyectando la DB (Aplicación)
const createAppointmentUseCase = new CreateAppointment(appointmentRepository);
const getAppointmentsUseCase = new GetAppointments(appointmentRepository);

// 3. Instanciamos el Controlador inyectando los Casos de Uso (Presentación)
const appointmentController = new AppointmentController(
    createAppointmentUseCase,
    getAppointmentsUseCase
);

// 4. Conectamos las Rutas HTTP (Presentación / Framework)
const appointmentRoutes = getAppointmentRoutes(appointmentController);

app.use('/api/appointments', appointmentRoutes);

// El root '/' servirá automáticamente index.html por express.static

// Conexión a DB y Arranque de Servidor
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ Conexión exitosa a MongoDB Atlas');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor de Turnos Médicos (Producción) corriendo en el puerto ${PORT}`);
            console.log(`- Dashboard: http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Error fatal al conectar a MongoDB Atlas:', error.message);
        process.exit(1);
    });


