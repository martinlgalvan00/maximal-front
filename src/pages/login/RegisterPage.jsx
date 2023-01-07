import { useState} from 'react'
import * as UsersService from '../../services/users.services.js'

import {Link, useNavigate, useParams} from 'react-router-dom'


function RegisterPage(){
    const {id} = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [error, setError] = useState()


    function changeName(e){
        setName(e.target.value)
    }

    function changeEmail(e){
        setEmail(e.target.value)
    }
    

    function changePassword(e){
        setPassword(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        UsersService.createAlumno(id, {name, email, password})
            .then(() => {
                navigate(`/users/${id}`)
            })
            .catch(err =>{
                setError(err.message)
            })
    }

    return (

        <section className='container-fluid'>

            <div className='d-flex flex-column align-items-center mt-5'>

                <h1>Crear alumno</h1>
                <p className='my-4 text-center'>Por favor, creá el nombre, email y contraseña de tu alumno.</p>
                {error && 
                <div className="alert alert-danger text-center p-0" role="alert">
                    <p className='p-2 m-0'>{error}</p>
                </div>
                }
                <form onSubmit={onSubmit}>

                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control my-1" id="name" name="name"  onChange={changeName}/>

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control my-1" id="email" name="email" onChange={changeEmail} />

                    <label htmlFor="passw" className="form-label">Password</label>
                    <input type="password" className="form-control my-1" id="passw" name="passw" onChange={changePassword} />
                    
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary mt-5'>Crear usuario</button>
                    </div>
                </form>

                <Link className='btn mt-4' to={`/users/${id}`}>Ver lista de usuarios</Link>
            </div>



        </section>

    )
}

export default RegisterPage