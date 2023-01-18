import Logo from '../../components/Logo'

import CardElite2021 from '../../components/Cards/CardElite2021'
import CardElite2022 from '../../components/Cards/CardElite2022'
import CardCopaPitbull from '../../components/Cards/CardCopaPitbull'



function CompetitionPage(){

    return (
        <main className='container-sm'>

            <div className='row justify-content-center'>

                <div className='col-1  p-0 '>
                    <button class="btnLeft bg-secondary lh-base" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                </div>

                <div id="carouselExample" class="carousel slide col-10 p-0">

                    <div class="carousel-inner">

                        <div class="carousel-item ">
                                <CardElite2021/>
                        </div>
                        <div class="carousel-item active">
                                <CardElite2022/>                
                        </div>

                        <div class="carousel-item">
                                <CardCopaPitbull />              
                        </div>
                    </div>
                </div>

                <div className='col-1 p-0 '>
                    <button class="btnLeft bg-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></button>
                </div>
    
            </div>

        </main>)          
}


export default CompetitionPage
