//Busca todas las noticias
async function findAllBlogs() {
    return fetch(`http://localhost:2022/api/blog`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener las rutinas')
            }
        })
}

//Busca una noticia por su ID
async function findByBlogId(id) {
    return fetch(`http://localhost:2022/api/blog/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener las rutinas')
            }
        })
}

// Crea una noticia
async function createBlog(formData) {
    try {
        const response = await fetch(`http://localhost:2022/api/blog`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('token'),
            },
            body: formData,
        });

        if (!response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al crear el blog');
            } else {
                const errorText = await response.text();
                console.error('Error HTML:', errorText);
                throw new Error('Error inesperado en el servidor.');
            }
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        // Aquí mostramos el mensaje de error específico capturado desde el backend
        console.error('Error en la solicitud:', error.message);
        alert(`Error al crear el blog: ${error.message}`);
        throw error;
    }
}


async function editBlog(id, formData) {
    try {
        const response = await fetch(`http://localhost:2022/api/blog/${id}`, {
            method: 'PATCH',
            headers: {
                'auth-token': localStorage.getItem('token'),
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'No se pudo editar el blog');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
        throw error;
    }
}

//Eliminar un día por su ID
async function deleteBlog(id) {
    return fetch(`http://localhost:2022/api/blog/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
    })
        .then(response => response.json())
}

export {
    findAllBlogs,
    findByBlogId,
    createBlog,
    editBlog,
    deleteBlog

}