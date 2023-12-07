//Busca todas las noticias
async function findAllNotices() {
    return fetch(`https://maximal-back.vercel.app/api/notices`, {
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
async function findByNoticeId(id) {
    return fetch(`https://maximal-back.vercel.app/api/notices/${id}`, {
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
async function createNotice(notice) {

    try {
        const response = await fetch(`https://maximal-back.vercel.app/api/notices`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(notice),
        });

        if (!response.ok) {
            // Manejar el caso donde la respuesta no fue exitosa
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al crear la noticia');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        // Manejar errores de red, de parseo de JSON, o cualquier otro error aquí
        console.error('Error en la solicitud:', error.message);
        throw error;
    }
}


//Editar un día

async function editNotice(id, notice) {
    return fetch(`https://maximal-back.vercel.app/api/notices/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(notice)
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error('No se pudo editar el dia')
        }
    })
}

//Eliminar un día por su ID
async function deleteNotice(id) {
    return fetch(`https://maximal-back.vercel.app/api/notices/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
    })
        .then(response => response.json())
}

export {
    findAllNotices,
    findByNoticeId,
    createNotice,
    editNotice,
    deleteNotice

}