import Logo from '../../components/Logo'

import CardElite2020 from '../../components/Cards/CardElite2020'
import CardElite2021 from '../../components/Cards/CardElite2021'
import CardElite2022 from '../../components/Cards/CardElite2022'
import CardCopaPitbull from '../../components/Cards/CardCopaPitbull'
import CardSouth from '../../components/Cards/CardSouth'





function CompetitionPage(){

    return (
        <main className='container-sm'>

            <div className='row justify-content-center'>

                <div className='col-12 p-4 '>
                    <button className="btnLeft bg-secondary lh-base p-4" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </button>
                </div>

                <div id="carouselExample" className="carousel slide col-10 p-0">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                                <CardElite2020 />              
                        </div>

                        <div className="carousel-item ">
                                <CardElite2021/>
                        </div>
                        
                        <div className="carousel-item ">
                                <CardElite2022/>                
                        </div>

                        <div className="carousel-item">
                                <CardCopaPitbull />              
                        </div>

                        <div className="carousel-item">
                      
                                <CardSouth />              
                        </div>
                        
                    </div>
                </div>

                <div className='col-12 p-4 '>
                    <button className="btnLeft bg-secondary lh-base p-4" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </button>
                </div>
    
            </div>

        </main>)          
}


export default CompetitionPage
