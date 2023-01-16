import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import * as authService from "../../services/auth.services"
import { Link } from 'react-router-dom';

function NavBarOffCanvas() {

  const navigate = useNavigate()

  const [isAutenticated, setIsAutenticated] = useState(null)
    
        useEffect(() => {
            const token = localStorage.getItem('token')
            if(token){
                setIsAutenticated(true)
            } else{
                setIsAutenticated(false)
            }
        }, [isAutenticated])

function onLogout(){
    
    setIsAutenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('_id')
    localStorage.removeItem('name')
    
    authService.logout()
    navigate('/')
}

if(isAutenticated === null){
    return <h1>Carga</h1>
}


function isAdmin(){
    const admin = localStorage.getItem('role')
    if(admin == 'admin'){
        return true
    }else{
        return false
    }
}



  return (
<>
        <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3 ">
          <Container fluid >
            <Navbar.Brand href="/">Maximal STR CORP</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-lg-${"lg"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-lg-${"lg"}`}
              aria-labelledby={`offcanvasNavbarLabel-lg-${"lg"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-lg-${"lg"}` }>
                  Maximal STR CORP
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <Nav.Link className='a' href="/">Home</Nav.Link>
                  <Nav.Link className='a' href="/categorys">Categorias</Nav.Link>
                  <Nav.Link className='a' href="/records">Records</Nav.Link>
                  <Nav.Link className='a' href="/competition">Records</Nav.Link>
                  {isAdmin() && <Nav.Link className='a' href={`/notices`}>Administrar noticias</Nav.Link>}
                  {!isAutenticated && <><Nav.Link className='a' href={"/login"}>Login</Nav.Link> </>}
                  {isAutenticated && <><Nav.Link className='a' onClick={onLogout}>Logout</Nav.Link> </>}
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
    );
}

export default NavBarOffCanvas;