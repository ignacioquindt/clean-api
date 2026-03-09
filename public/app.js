const appointmentList = document.getElementById('appointmentList');
const appointmentForm = document.getElementById('appointmentForm');
const authStatus = document.getElementById('authStatus');
const apiKeyModal = document.getElementById('apiKeyModal');

let API_KEY = localStorage.getItem('api_key');

function init() {
    if (!API_KEY) {
        apiKeyModal.classList.remove('hidden');
    } else {
        updateAuthBadge();
        loadAppointments();
    }
}

function saveApiKey() {
    const val = document.getElementById('apiKeyInput').value;
    if (val) {
        API_KEY = val;
        localStorage.setItem('api_key', val);
        apiKeyModal.classList.add('hidden');
        updateAuthBadge();
        loadAppointments();
    }
}

function updateAuthBadge() {
    authStatus.innerHTML = `🛡️ API Key: ****${API_KEY.slice(-3)}`;
    authStatus.style.borderColor = 'var(--success)';
}

async function loadAppointments() {
    try {
        const response = await fetch('/api/appointments');
        const { data } = await response.json();

        renderAppointments(data);
    } catch (error) {
        console.error('Error loading appointments:', error);
        appointmentList.innerHTML = '<p style="color: var(--danger)">Error al conectar con la API</p>';
    }
}

function renderAppointments(appointments) {
    if (!appointments || appointments.length === 0) {
        appointmentList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No hay citas agendadas.</p>';
        return;
    }

    appointmentList.innerHTML = appointments.map(app => `
        <div class="appointment-item">
            <div class="appointment-info">
                <h3>${app.patientName}</h3>
                <p>👨‍⚕️ Dr. ${app.doctorName}</p>
                <p>📅 ${new Date(app.date).toLocaleString('es-AR')}</p>
            </div>
            <span class="status-badge status-scheduled">${app.status}</span>
        </div>
    `).join('');
}

appointmentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        patientName: document.getElementById('patientName').value,
        doctorName: document.getElementById('doctorName').value,
        date: document.getElementById('date').value
    };

    try {
        const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            appointmentForm.reset();
            loadAppointments();
        } else {
            const err = await response.json();
            alert(`Error: ${err.message || 'No autorizado'}`);
            if (response.status === 401) {
                localStorage.removeItem('api_key');
                location.reload();
            }
        }
    } catch (error) {
        alert('Error al crear la cita');
    }
});

init();
