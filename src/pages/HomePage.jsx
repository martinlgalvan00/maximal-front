import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import * as NoticesServices from '../services/notices.services.js';
import Logo from '../components/Logo'
import ModalReglas from '../components/Modals/ModalReglas'
import AccordionEquipe from '../components/Accordions/AccordionEquipe'
import AccordionBasics from '../components/Accordions/AccordionBasics'

import CarouselEvents from '../components/Carrousel/CarouselEvents'
import CarouselClasificatorys from '../components/Carrousel/CarouselClasificatorys'
import CarouselDinamic from '../components/Carrousel/CarouselDinamic'





import logoNotices from '../assets/img/LogoNotices.png'


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
    
    
    <div className="row justify-content-center colorFondo">

        <h2 className="my-4 col-12 col-lg-8 text-center">Organización de eventos deportivos</h2>

        <p className="mt-4 mb-5 col-10 col-lg-7 text-center">Somos una empresa privada organizadora de eventos de <b>fuerza</b> deportivos y académicos. Nuestros torneos y competencias son <b>libres</b> de federaciones y abierto a todo público indiferentemente del nivel y/o edad.  Nuestras <b>capacitaciones</b> están orientadas a formar entrenadores y/o complementar el conocimiento en deportistas de fuerza.</p>
    </div>

    <div className='row justify-content-center mb-4 '>
        <h2 className='col-12 text-center mb-3'>Calendario Anual</h2>

        <div className='col-12 col-lg-4 mb-4'>
            <h3 className='text-center my-3'>Clasificatorios</h3>
            <CarouselClasificatorys />
        </div>

        <div className='col-12 col-lg-4 mb-4'>
            <h3 className='text-center my-3'>Competencias</h3>
            <CarouselEvents />
        </div>

        <div className='col-12 col-lg-4 mb-4'>
            <h3 className='text-center my-3'>Dinámica</h3>
            <CarouselDinamic />
        </div>


        
    </div>

    <div className='row justify-content-center'>
        <h2 className='col-12 text-center mb-5'>Reglas generales de Powerlifting</h2>
        <button className='btn btn-primary col-6 col-lg-2 ' onClick={handleShow}>Ver reglas</button>
        <ModalReglas show={show} handleClose={handleClose} />
    </div>

    <div className='row justify-content-center '>
        <h2 className='col-12 text-center my-5'>Equipo permitido</h2>

        <div className='col-12 col-lg-6'>
            <AccordionEquipe />
        </div>
        
    </div>
    
    <div className='row justify-content-center '>
        <h2 className='col-12 text-center my-5'>Levantamientos y reglas de ejecución</h2>

        <div className='col-12 col-lg-6'>
            <AccordionBasics />
        </div>
        
    </div>

    <h2 className="text-center my-5">Últimas novedades</h2>

    <div className="row justify-content-center">
        {notice.map(element => (
            <div key={element._id} className="text-center m-auto col-10 col-sm-5 col-xl-4 pb-3" >
                <div className='card text-center m-auto'>

                <img src={logoNotices} alt={element.name} className="card-img-top bg-dark" />
                <div className="card-body">
                    <h3 className="card-title">{element.name}</h3>
                    <p className="card-text">{element.description}</p>
                </div>
                <div className="card-footer border-0 w-100 text-center">
                    <Link target='blank' to={element.form}>
                    <button className="btn btn-warning">Ir a formulario</button>
                    </Link>
                </div>
            </div>
            
            </div>
        ))}
    </div>


</main>


  )
}


export default HomePage