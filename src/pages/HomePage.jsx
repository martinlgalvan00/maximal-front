import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import * as NoticesServices from '../services/notices.services.js';
import Logo from '../components/Logo'
import ModalReglas from '../components/Modals/ModalReglas'
import AccordionEquipe from '../components/Accordions/AccordionEquipe'


const name = localStorage.getItem('name')

function HomePage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [notice, setNotice] = useState([])

    useEffect(() => {
        NoticesServices.findAllNotices()
        .then(data => {
            setNotice(data)
        })
    }, [])


return (

<main className="container-fluid">
    
    <Logo />
    
    <div className="row justify-content-center colorFondo">

        <h2 className="my-4 col-12 text-center">Organizadora de eventos deportivos.</h2>
        <p className="mt-4 mb-5 col-10 col-lg-6 text-center">Somos una empresa privada organizadora de eventos de fuerza en general, Powerlifting, Strongman, Strongwoman. Nuestros torneos y competencias son libres de federaciones y abierto a todo el mundo indiferentemente del nivel y la edad. Maximal nace desde la necesidad de consolidar una estructura y organización que de la mayor seriedad y profesionalismo al deporte. Sé parte.</p>
    
    </div>

    <div className='row justify-content-center'>
        <h2 className='col-12 text-center mb-5'>Reglas generales del powerlifting</h2>
        <button className='btn btn-primary col-6 col-lg-2 ' onClick={handleShow}>Ver reglas</button>
        <ModalReglas show={show} handleClose={handleClose} />
        
    </div>

    <div className='row justify-content-center '>
        <h2 className='col-12 text-center my-5'>Equipo permitido</h2>
        <div className='col-12 col-lg-6'>
        <AccordionEquipe />

        </div>
        
    </div>

    <h2 className="text-center my-5">Últimas novedades</h2>
    <div className="card-group justify-content-center">
        <a href=""></a>
        {notice.map(element => 
            <div key={element._id} class="card largoCard mx-4 text-center">
                <img src={element.image} alt={element.name} />
                <div class="card-body">
                <h3 className="card-title my-3">{element.name}</h3>
                <p className="card-text mt-2">{element.description}</p>
                <a target="_BLANK" href={element.form}>{element.form}</a>

                </div>
                <div class="card-footer">
                    <small class="text-muted">Última vez actualizado el 13/01/2022</small>
                </div>
        </div>

            )}
    </div>

</main>


  )
}


export default HomePage