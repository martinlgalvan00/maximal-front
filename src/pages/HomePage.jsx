import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import * as NoticesServices from '../services/notices.services.js';
import Logo from '../components/Logo'

const name = localStorage.getItem('name')

function HomePage() {
    
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
        <p className="mt-4 mb-5 col-10 col-lg-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione nesciunt non voluptatem sunt mollitia ex sed totam, vel ullam modi deleniti rem, exercitationem sapiente commodi iusto illum veniam amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde fugiat cum iure, vero dicta aspernatur itaque sit voluptate ea minima minus est exercitationem iusto explicabo fugit repudiandae? Delectus, ullam!</p>
    
    </div>

    <h2 className="text-center my-5">Últimas novedades</h2>

    <div className="card-group">
        {notice.map(element => 

            <div key={element._id} className="card border-white">
                <div className="card-body text-center">
                    
                    <img src={element.imagen} alt={element.name} />

                    <h3 className="card-title">{element.name}</h3>
                    <p className="card-text">{element.description}</p>
                </div>
            </div>
            )}
    </div>

</main>


  )
}


export default HomePage