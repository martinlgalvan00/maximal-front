import {useState, useEffect} from 'react'
import { Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'

import Logo from '../../components/Logo'
import CreateNotice from '../../components/Notices/CreateNotice'
import AdminEditNoticesPage from '../../pages/notices/AdminEditNoticesPage.jsx'

import * as NoticesServices from '../../services/notices.services'
import { ConfirmDialog, confirmDialog  } from 'primereact/confirmdialog';
import Blog from '../../components/Blog.jsx'

function AdminNoticesPage(){

    const [loading, setLoading] = useState([])

    const [notice, setNotice] = useState([])
    const [status, setStatus] = useState(false)

    const [show, setShow] = useState(false)
    const [notice_id, setNotice_id] = useState()
    const [notice_name, setNotice_name] = useState()
    const [notice_description, setNotice_description] = useState()
    const [notice_form, setNotice_form] = useState()

    useEffect(() => {
        NoticesServices.findAllNotices()
        .then(data => {
            setNotice(data)
            setStatus(true)
        })
    }, [status])

    const handleClose = () => setShow(false);

    function openNotice(id,name,description,form){

        setShow(true)
        setNotice_id(id)
        setNotice_name(name)
        setNotice_description(description)
        setNotice_form(form)
    }


    const refresh = () => {setStatus(false)}

    return (
        <main className='container-sm'>

            <div className='row justify-content-center'>
                <CreateNotice refresh={refresh}/>
            </div>

            <div className='row justify-content-center mt-4'>
                <div className='table-responsive col-8'>

                <table className="table">
                    <thead>
                        <tr  className='text-center'>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {notice.map(element => 
                    <tr key={element._id} className='text-center'>
                        <td><button className='btn' onClick={() => openNotice(element._id, element.name, element.description, element.form)}>{element.name}</button></td>
                        <td>
                        <button onClick={() => openNotice(element._id, element.name, element.description, element.form)} className='btn buttonsEdit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            </svg>
                        </button>
                        </td>
                    </tr>
                )}
                    
                    </tbody>
                </table>
                </div>
                                
            </div>
            <AdminEditNoticesPage show={show} handleClose={handleClose} refresh={refresh} notice_id={notice_id} notice_name={notice_name} notice_description={notice_description} notice_form={notice_form} />
            <div>
                <Blog />
            </div>
        </main>
        
        
        )           
}


export default AdminNoticesPage
