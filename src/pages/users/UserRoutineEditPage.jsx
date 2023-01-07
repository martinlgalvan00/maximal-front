
import { useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import * as UsersService from '../../services/users.services.js';
import NewDay from '../../components/NewDay'

function UserRoutineEditPage(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [routine, setRoutine] = useState([])
    const [status, setStatus] = useState(false)
    const [name, setNameEdit] = useState("")

    useEffect(() => {
        UsersService.findRoutineByUserId(id)
        .then(data => {   
            setRoutine(data)
            setStatus(false)
        })
    }, [status])



    function deleteDay(id){
        UsersService.deleteDay(id)
        setStatus(true)
    }

    function deleteUser(id){
        UsersService.deleteUser(id)
            .then(() => {
                navigate(`/`)
            })
    }

    //Edit

    
    useEffect(() => {
        
    }, [name])

    function changeNameEdit(e){
        setNameEdit(e.target.value)
    }

    function editDay({name}, _id){
        setNameEdit(name)
        UsersService.editDay({name}, _id)
        window.location.reload();
    }

    return (

        <section className='container'>
            <div className='row justify-content-center'>

                <div className='col-12 col-lg-6 text-center'>
                    <h2 className='text-center my-5'>Editar rutina</h2>
                    <NewDay />
                    
                    <div className="table-responsive table-bordered">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-33 text-center">Nombre</th>
                                    <th scope="col" className="w-33 text-center">Ver</th>
                                    <th scope="col" className="w-33 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routine.map(elemento => 
                                
                                <tr key={elemento._id}>
                                    <td className='text-center'><input className='form-control' type="text" defaultValue={elemento.name} onChange={changeNameEdit}/></td> 
                                    <td className='text-center'>
                                        <Link to={`/routine/day/edit/${elemento._id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-eye text-dark" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                        </svg>
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        <button onClick={() => deleteDay(elemento._id)} className='m-1 btn btn-danger'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="text-light bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                        </svg>
                                        </button>
                                        <button onClick={() => editDay({name},elemento._id)} className='m-1 btn btn-primary' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="text-light bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </button>
                                    </td>
                                    
                                </tr>)}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                
            </div>
            
            <div className='d-flex flex-column align-items-center'>
                <button onClick={() => deleteUser(id)} className='btn btn-danger my-5'>Eliminar usuario</button>
            </div>
            
        </section>
    )
}

export default UserRoutineEditPage