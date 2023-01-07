import { useState} from 'react'
import * as UsersService from '../services/users.services.js'
import * as JsonExercises from '../services/jsonExercises.services.js';

import Autosuggest from 'react-autosuggest';
import { useEffect } from 'react';
import { useParams} from 'react-router-dom'


function AddExercise(){

    //---variables para la carga
    const {id} = useParams()

    const [name, setName] = useState("")
    const [sets, setSets] = useState()
    const [reps, setReps] = useState()
    const [video, setVideo] = useState()

    //---variables para el autocompletado

    const[data, setData]= useState([]);
    const[ejercicios, setEjercicios]= useState([]);
    const[value, setValue]= useState("");
    const[ejercicioSeleccionado, setPersonajeSeleccionado]= useState({});


    function changeSets(e){
        setSets(e.target.value)
    }

    function changeReps(e){
        setReps(e.target.value)
    }

    function changeVideo(e){
      setVideo(e.target.value)
  }

    function onSubmit(e){
        UsersService.addExerciseToDay(id, {name, sets, reps, video})
    }


    //-----------------------------------------------------//



const onSuggestionsFetchRequested=({value})=>{
  setEjercicios(filtrarEjercicios(value));
}

const filtrarEjercicios=(value)=>{
  const inputValue=value.trim().toLowerCase();
    const inputLength=inputValue.length;

    let filtrado = data.filter((ejercicio)=>{
    let textoCompleto = ejercicio.name;

    if ( textoCompleto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(inputValue)){
        return ejercicio;
    }
  });

  return inputLength===0 ? [] : filtrado;
}

const onSuggestionsClearRequested = () =>{
  setEjercicios([]);
}

const getSuggestionValue=(suggestion)=>{
  setVideo(suggestion.video)
  console.log(suggestion.video)
  return `${suggestion.name}`;
}

const renderSuggestionName=(suggestion)=>(
  <div className='sugerencia' onClick={()=>seleccionarPersonaje(suggestion)}>
    {`${suggestion.name}`}
  </div>
);

const seleccionarPersonaje=(ejercicio)=>{
  setPersonajeSeleccionado(ejercicio);
}

const onChange=(e, {newValue})=>{
  setValue(newValue);
  setName(newValue)
}

const inputProps={
placeholder:"Nombre del ejercicio",
type: "text",
className: "form-control",
id: "name",
name: "name",
value,
onChange
};

const eventEnter=(e)=>{
if(e.key == "Enter"){
  let ejercicioActual = data.filter(p => p.name == e.target.value.trim());

  let ejercicio = {
    id: ejercicioActual[0]._id,
    name: ejercicioActual[0].name,
    video: ejercicioActual[0].video,
  };
  seleccionarPersonaje(ejercicio);
}
}



useEffect(()=>{
    JsonExercises.findJsonExercises()
        .then(data => {
            console.log(data)
            setEjercicios(data);
            setData(data);
        })

}, []);




    /*<input type="text" className="form-control w-50" id="name" name="name"  onChange={changeName} placeholder="Ejercicio"/>*/
    return (

            <form className='row justify-content-center w-75 my-5' onSubmit={onSubmit}>
                <div className='col-4'>
                  <label htmlFor="name" className="form-label visually-hidden">Ejercicio</label>
                  <Autosuggest 
                      suggestions={ejercicios}
                      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={onSuggestionsClearRequested}
                      getSuggestionValue={getSuggestionValue}
                      renderSuggestion={renderSuggestionName}
                      inputProps={inputProps}
                      onSuggestionSelected={eventEnter}
                      />
                </div>

                <div className='col-2'>
                  <label htmlFor="series" className="form-label visually-hidden">Series</label>
                  <input type="number" className="form-control" id="series" name="series" onChange={changeSets} placeholder="Series"/>
                </div>

                <div className='col-2'>
                  <label htmlFor="reps" className="form-label visually-hidden">Reps</label>
                  <input type="number" className="form-control" id="reps" name="reps" onChange={changeReps} placeholder="Reps"/>
                </div>

                <div className='col-3'>
                  <label htmlFor="video" className="form-label visually-hidden">Video</label>
                  <input type="text" className="form-control" id="video" name="video" defaultValue={video} onChange={changeVideo} placeholder="Video"/>
                </div>

                <div className='col-1'>
                  <button className='btn btn-warning input-group-text'>Crear</button>
                </div>

        </form>

        
    )
}

export default AddExercise