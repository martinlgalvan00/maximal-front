import {useState} from 'react'
import * as UsersService from '../services/users.services.js'

import {useParams, useNavigate} from 'react-router-dom'


function EditDay(){
    const {id} = useParams()
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function changeName(e){
        setName(e.target.value)
    }

    function onSubmit(){
        UsersService.editDay({name}, id)
            navigate('/')
    }

    return (
        <div>
        
        <h2 className='my-4 text-center'>Editá el nombre de un día.</h2>
        <div className='row justify-content-center'>
            <form className='col-10 col-lg-6' onSubmit={onSubmit}>
                <div cl className="input-group mb-5">
                    <label htmlFor="name" className="visually-hidden ">Nombre del día</label>
                    <input type="text" className="form-control" id="name" name="name"  onChange={changeName} value={name} placeholder="Día 1" />
                    <button className='input-group-text btn btn-warning'>Editar día</button>
                </div>
            </form>
        </div>
           
        </div>
            

    )
}

export default EditDay