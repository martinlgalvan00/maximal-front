
import { useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import * as UsersService from '../../services/users.services.js';
import AddExercise from '../../components/AddExercise'
import Logo from '../../components/Logo'

function DayEditDetailsPage(){
    const {id} = useParams()
    const navigate = useNavigate()
    const idEntrenador = localStorage.getItem('_id')
    const [day, setDay] = useState([])
    const [status, setStatus] = useState(false)
    let [name, setNameEdit] = useState()
    let [sets, setSetsEdit] = useState()
    let [reps, setRepsEdit] = useState()
    let [video, setVideoEdit] = useState()

    useEffect(() => {
        UsersService.findExercises(id)
        .then(data => {
            setDay(data.rutine)
            setStatus(false)
           
        })
    }, [status])

    function deleteOneExercise(idDay, id){
        UsersService.deleteExercise(idDay, id)
        setStatus(true)

    }

    //Edit

    function changeNameEdit(e){
        setNameEdit(e.target.value)
    }

    function changeSetsEdit(e){
        setSetsEdit(e.target.value)
    }

    function changeRepsEdit(e){
        setRepsEdit(e.target.value)
    }

    function changeVideoEdit(e){
        setVideoEdit(e.target.value)
    }

    function editExercise(exercise_id, nombre, series, repeticiones, video1){
        if(name == undefined){
            name = nombre
        }

        if(sets == undefined){
            sets = series
        }

        if(reps == undefined){
            reps = repeticiones
        }

        if(video == undefined){
            video = video1
        }
        

        UsersService.editExercise(id, exercise_id, {name, sets, reps, video})
        window.location.reload();
    }

    return (

        <section className='container-fluid'>
            <Logo />
            <div className='row justify-content-center align-items-center text-center'>
            <AddExercise/>
                <div className='col-12 col-lg-6 text-center w-75'>
                    {name} {sets} {reps} 
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" className=" text-center">Ejercicio</th>
                                    <th scope="col" className=" text-center">Series</th>
                                    <th scope="col" className=" text-center">Repeticiones</th>
                                    <th scope="col" className=" text-center">Video</th>
                                    <th scope="col" className=" text-center">Acciones</th>

                                </tr>
                            </thead>
                            <tbody>
                            {day.map(element => 
                                <tr key={element.exercise_id}>
                                    <td className='text-center'><input className='form-control' type="text" defaultValue={element.name} onChange={changeNameEdit}/></td>
                                    <td className='text-center'><input className='form-control' type="number" defaultValue={element.sets} onChange={changeSetsEdit}/></td>
                                    <td className='text-center'><input className='form-control' type="number" defaultValue={element.reps} onChange={changeRepsEdit}/></td>
                                    <td className='text-center'><input className='form-control' type="text" defaultValue={element.video} onChange={changeVideoEdit}/></td>

                                    <td className="text-center">
                                            <button onClick={(e) => deleteOneExercise(id, element.exercise_id)} className='m-1 btn btn-danger'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="text-light bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                </svg>
                                            </button>
                                            <button onClick={(e) => editExercise(element.exercise_id, element.name, element.sets, element.reps, element.video)} className='m-1 btn btn-warning'>
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

                <div className='d-flex justify-content-center'>
                    <Link className="btn btn-primary text-center mt-5" to={`/users/${idEntrenador}`}>Volver al inicio</Link>
                </div>
        </section>


    )
}

export default DayEditDetailsPage