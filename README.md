# 🏥 Sistema de Citas Médicas - Clean API

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
*   TypeScript para una base de código tipada y segura.

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
