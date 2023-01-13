import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import * as authService from "../services/auth.services"

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
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Maximal STRCORP</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/categorys">Categorias</Nav.Link>
                  <Nav.Link href="/records">Records</Nav.Link>
                  {isAdmin() && <Nav.Link href={`/notices`}>Administrar noticias</Nav.Link>}
                  {!isAutenticated && <><Nav.Link href={"/login"}>Login</Nav.Link> </>}
                  {isAutenticated && <><Nav.Link onClick={onLogout}>Logout</Nav.Link> </>}
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
}

export default NavBarOffCanvas;