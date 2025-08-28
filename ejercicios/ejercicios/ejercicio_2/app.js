async function cargarClimaPorCiudad() {
  const ciudad = document.getElementById('ciudad').value.trim();
  const cont = document.getElementById('cont');
  const apiKey = '2a892ad333fe0bdb8561a98ab24e66af';       // Colocá tu clave real acá

  if (!ciudad) {
    cont.innerHTML = 'Por favor, escribí una ciudad.';
    return;
  }

  cont.innerHTML = 'Cargando…';

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
    );
    
    if (!response.ok) {
      throw new Error('Ciudad no encontrada');
    }

    const data = await response.json();

    cont.innerHTML = `
      <h3>${data.name}</h3>
      <p>Clima: ${data.weather[0].description}</p>
      <p>Temperatura: ${data.main.temp} °C</p>
      <p>Humedad: ${data.main.humidity}%</p>
    `;
  } catch (e) {
    cont.innerHTML = 'Error: No se pudo cargar el clima.';
    console.error(e);
  }
}
