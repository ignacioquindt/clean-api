# 🏥 Medical Appointment System | Sistema de Citas Médicas

[English](#-medical-appointment-system---clean-api) | [Español](#-sistema-de-citas-médicas---clean-api)

---

# 🇺🇸 Medical Appointment System - Clean API

A professional medical appointment management system designed under **Clean Architecture** and **SOLID** principles. This project demonstrates how to build a scalable, maintainable, and secure API using modern technologies.

## 🚀 Why "Clean API"?

The name refers to **Clean Architecture**. Unlike traditional projects where code is often coupled, here the code is organized into independent layers:

*   **Domain:** The core of the system (Business rules and entities).
*   **Application:** Use cases (Schedule appointment, list appointments).
*   **Infrastructure:** Interaction with the outside world (MongoDB database, Mongoose).
*   **Presentation:** How data is displayed (API Controllers and visual Dashboard).

This allows the system to be easily testable and enables us to change the database or framework without breaking the business logic.

## ✨ Key Features

*   🛡️ **Security:** Routes protected via API Key Middleware.
*   🗄️ **Real Persistence:** Integration with **MongoDB Atlas** for cloud storage.
*   🎨 **Premium Dashboard:** User interface with **Glassmorphism** aesthetics and dark mode.
*   🏗️ **Robust Architecture:** Strict implementation of Dependency Inversion.
*   **TypeScript:** For a typed and secure codebase.

## 🛠️ Tech Stack

*   **Backend:** Node.js, Express, TypeScript
*   **Database:** MongoDB Atlas, Mongoose
*   **Frontend:** Vanilla JavaScript, HTML5, CSS3 (Glassmorphism UI)
*   **Dev Tools:** Nodemon, Dotenv, TS-Node

## 🏁 Installation and Usage

1.  **Clone the repository and enter the folder:**
    ```bash
    cd clean-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root with your credentials:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_atlas_url
    API_KEY=your_secret_key
    ```

4.  **Start in development mode:**
    ```bash
    npm run dev
    ```

5.  **Open the Dashboard:**
    Navigate to [http://localhost:3000](http://localhost:3000)

---

> Developed as an engineering piece to demonstrate skills in software architecture and professional fullstack development. 🚀

---

# 🇪🇸 Sistema de Citas Médicas - Clean API

Un sistema profesional de gestión de turnos médicos diseñado bajo los principios de **Clean Architecture** y **SOLID**. Este proyecto demuestra cómo construir una API escalable, mantenible y segura utilizando tecnologías modernas.

## 🚀 ¿Por qué "Clean API"?

El nombre hace referencia a **Clean Architecture** (Arquitectura Limpia). A diferencia de los proyectos tradicionales donde todo el código está mezclado, aquí el código se organiza en capas independientes:

*   **Dominio (Domain):** El corazón del sistema (Reglas de negocio y entidades).
*   **Aplicación (Application):** Los casos de uso (Agendar cita, listar citas).
*   **Infraestructura (Infrastructure):** La conexión con el mundo exterior (Base de datos MongoDB, Mongoose).
*   **Presentación (Presentation):** Cómo se muestran los datos (Controladores de la API y Dashboard visual).

Esto permite que el sistema sea fácil de testear y que podamos cambiar la base de datos o el framework sin romper la lógica del negocio.

## ✨ Características Principales

*   🛡️ **Seguridad:** Rutas protegidas mediante Middleware de API Key.
*   🗄️ **Persistencia Real:** Integración con **MongoDB Atlas** para almacenamiento en la nube.
*   🎨 **Dashboard Premium:** Interfaz de usuario con estética **Glassmorphism** y modo oscuro.
*   🏗️ **Arquitectura Robusta:** Implementación estricta de Inversión de Dependencias.
*   **TypeScript:** Para una base de código tipada y segura.

## 🛠️ Tecnologías Utilizadas

*   **Backend:** Node.js, Express, TypeScript
*   **Database:** MongoDB Atlas, Mongoose
*   **Frontend:** Vanilla JavaScript, HTML5, CSS3 (Glassmorphism UI)
*   **Dev Tools:** Nodemon, Dotenv, TS-Node

## 🏁 Instalación y Uso

1.  **Clonar el repositorio y entrar a la carpeta:**
    ```bash
    cd clean-api
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz con tus credenciales:
    ```env
    PORT=3000
    MONGODB_URI=tu_url_de_mongodb_atlas
    API_KEY=tu_clave_secreta
    ```

4.  **Iniciar en modo desarrollo:**
    ```bash
    npm run dev
    ```

5.  **Abrir el Dashboard:**
    Navega a [http://localhost:3000](http://localhost:3000)

---

> Desarrollado como una pieza de ingeniería para demostrar habilidades en arquitectura de software y desarrollo fullstack profesional. 🚀
