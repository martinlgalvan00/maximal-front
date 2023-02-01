import logoMaximal from '../assets/img/logoMaximal.png'


function Logo(){
    
    return (
        <div className='row justify-content-center back'>
            <h1 className="d-none">Maximal STR Corp</h1>
            <div className="col-12 col-lg-4 text-center  ">
              <img className='img-fluid mb-5' src={logoMaximal} alt="" />

            </div>
        </div>
    )
}

export default Logo