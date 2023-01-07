
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import * as UsersService from '../../services/users.services.js';
import Logo from '../../components/Logo'

function DayDetailsPage(){
    const {id} = useParams()
    const [day, setDay] = useState([])

    useEffect(() => {
        UsersService.findExercises(id)
        .then(data => {
            setDay(data.rutine)
        })
    }, [])

    return (

        <section className='container'>

            <Logo />

            <div className="table-responsive mt-5">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col" className="w-25 text-center">Ejercicio</th>
                            <th scope="col" className="w-25 text-center">Series</th>
                            <th scope="col" className="w-25 text-center">Repeticiones</th>

                        </tr>
                    </thead>
                    <tbody>

                        {day.map(element => 

                            <tr key={element._id}>
                                <td className='text-center'>{element.name}</td>
                                <td className='text-center'>{element.sets}</td>
                                <td className='text-center'>{element.reps}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center'>
                <Link className="btn btn-primary text-center mt-5" to={"/"}>Volver al inicio</Link>
            </div>

        </section>


    )
}

export default DayDetailsPage