function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('es-PE', { hour12: false });
  const date = now.toLocaleDateString('es-PE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('time').textContent = `Hora: ${time}`;
  document.getElementById('date').textContent = `Fecha: ${date}`;
}

function fetchLocation() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const location = `${data.city}, ${data.region}, ${data.country_name}`;
      document.getElementById('location').textContent = `Ubicación: ${location}`;
    })
    .catch(() => {
      document.getElementById('location').textContent = 'Ubicación: No disponible';
    });
}

setInterval(updateClock, 1000);
updateClock();
fetchLocation();
