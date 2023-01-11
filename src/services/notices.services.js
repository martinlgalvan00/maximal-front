//Busca todas las noticias
async function findAllNotices() {
    return fetch(`http://maximal-back.vercel.app/api/notices`, {
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
    return fetch(`http://maximal-back.vercel.app/api/notices/${id}`, {
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

//Crea una noticia
async function createNotice(notice) {
    return fetch(`http://maximal-back.vercel.app/api/notices`, {
        method: 'POST',
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
            throw new Error('No se pudo crear la noticia')
        }
    })
}

//Editar un día

async function editNotice(id, notice) {
    return fetch(`http://maximal-back.vercel.app/api/notices/${id}`, {
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
    return fetch(`http://maximal-back.vercel.app/api/notices/${id}`, {
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