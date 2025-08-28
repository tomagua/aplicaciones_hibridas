async function cargarUsuarios() {
  const cont = document.getElementById('cont'); // Asegúrate que existe en el HTML
  cont.innerHTML = 'Cargando…';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    cont.innerHTML = data.map(user => `<p>${user.name}</p>`).join('');
  } catch (e) {
    cont.innerHTML = 'Error cargando datos. Probá nuevamente.';
    console.error(e);
  }
}

cargarUsuarios();
