import logoMaximal from '../assets/img/logoMaximal.png'

function Logo(){
    
    return (
        <div className='row justify-content-center'>
            <h1 className="d-none">Maximal STR Corp</h1>
            <div className="col-12 col-lg-6 text-center">
                <img className="img-fluid" src={logoMaximal} alt="Maximal STR Corp"/>

            </div>
        </div>
    )
}

export default Logo