import {useState, useEffect} from 'react'
import { Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'

import Logo from '../../components/Logo'
import CreateNotice from '../../components/CreateNotice'

import * as NoticesServices from '../../services/notices.services'

function AdminNoticesPage(){

    const [notice, setNotice] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        NoticesServices.findAllNotices()
        .then(data => {
            setNotice(data)
        })
    }, [status])

    function deleteNotice(id){
        NoticesServices.deleteNotice(id)
        setStatus(true)

    }

    return (
        <main className='container-sm'>
            <div className='row justify-content-center'>
                <Logo />   
            </div>

            <div className='row justify-content-center'>
                <CreateNotice/>
            </div>

            <div className='row justify-content-center'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Formulario</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {notice.map(element => 
                <tr key={element._id}>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td>{element.form}</td>
                    <td>
                        <button onClick={(e) => deleteNotice(element._id)} className='m-1 btn btn-danger'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="text-light bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
            )}
                   
                </tbody>
            </table>
                
            </div>
  
            

            
        </main>)           
}


export default AdminNoticesPage
