
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import * as UsersService from '../../services/users.services.js';
import Logo from '../../components/Logo'

function UserRoutinePage(){
    const {id} = useParams()
    const [routine, setRoutine] = useState([])

    useEffect(() => {
        UsersService.findRoutineByUserId(id)
        .then(data => {     
            setRoutine(data)
        })
    }, [])


    return (
        
        <section className='container'>

            <Logo />

            <h2 className='text-center mt-4 mb-3'>Ver rutina</h2>
            
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col" className="w-50 text-center">Nombre</th>
                            <th scope="col" className="w-50 text-center">Ver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {routine.map(({_id, name}) => 
                        <tr key={_id}>
                            <td className='text-center'>{name}</td>
                            <td className='text-center'><Link to={`/routine/day/${_id}`}>Ver día</Link></td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default UserRoutinePage