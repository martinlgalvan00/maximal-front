async function findRecords(exercise, clase, category , sex) {
    return fetch(`https://maximal-back.vercel.app/api/records/${exercise}/${clase}/${category}/${sex}`, {
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
                throw new Error('No se pudo obtener los records')
            }
        })
}
export {
    findRecords
}