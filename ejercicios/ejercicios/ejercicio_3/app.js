      const btnPerro = document.getElementById('btnPerro');
        const imagenPerro = document.getElementById('imagenPerro');

        btnPerro.addEventListener('click', () => {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(respuesta => respuesta.json())
                .then(datos => {
                    imagenPerro.src = datos.message; // la URL de la imagen
                })
                .catch(error => console.error("Error al obtener datos:", error));
        });