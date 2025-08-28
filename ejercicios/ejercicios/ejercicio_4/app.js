function cargarComentarios() {
            const postId = document.getElementById('postId').value;
            const contenedor = document.getElementById('comentarios');

            if (!postId) {
                contenedor.innerHTML = '<p>Por favor, ingrese un ID de post válido.</p>';
                return;
            }

            // Limpiamos contenido previo y mostramos mensaje de carga
            contenedor.innerHTML = '<p>Cargando comentarios…</p>';

            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
                .then(respuesta => respuesta.json())
                .then(datos => {
                    // Si no hay comentarios
                    if (datos.length === 0) {
                        contenedor.innerHTML = '<p>No se encontraron comentarios para este post.</p>';
                        return;
                    }

                    // Creamos el HTML para mostrar comentarios
                    const html = datos.map(comentario => `
                        <div style="border:1px solid #ccc; padding:10px; margin:10px 0;">
                            <h3>${comentario.name}</h3>
                            <p><strong>Email:</strong> ${comentario.email}</p>
                            <p>${comentario.body}</p>
                        </div>
                    `).join('');

                    contenedor.innerHTML = html;
                })
                .catch(error => {
                    contenedor.innerHTML = '<p>Error al obtener comentarios.</p>';
                    console.error("Error al obtener datos:", error);
                });
        }
