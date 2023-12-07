import { useState } from 'react'

import logoMaximal from '../assets/img/logoMaximal.png'
import backgroundMaximal from '../assets/img/backgroundMaximal.jpg'
import videoPhone from '../assets/videos/MaximalPhone.mp4'
import ReactPlayer from 'react-player'
import { useEffect } from 'react'

function Logo(){

    const [anchoPagina, setAnchoPagina] = useState()

    useEffect(() => {
        setAnchoPagina(window.innerWidth)
    }, [])
    
    return (
        <div className={`main-container row m-0 p-0 ${"back"}`}>
            <div className="main-logo-container col-10 col-sm-6 col-lg-4 m-0 p-0 rounded-2 mb-5 ">
                <h1 className="visually-hidden">Maximal str corp</h1>
                
                <img className={`img-fluid`} src={logoMaximal} alt=""/>
            </div>

            
            {anchoPagina > 900 ? <div className="video-container">
                <>
                <ReactPlayer
                    url={anchoPagina > 1000 ? videoPhone : videoPhone}
                    width="100%"
                    className={""}
                    height={anchoPagina > 600 ? "100%" : "100%"} // Esto hace que el video ocupe el alto completo
                    playing={true}
                    volume={0}
                    loop={true}
                    controls={false}
                    />
                </>
            
            </div> : 
            null}


        </div>
    )
}

export default Logo