import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Estudio from "./img/chicoEstudiando.jpg";
import "./inicio.css";
import { NavLink } from "react-router-dom";


const Inicio = ()=>{
    return(
        <div className="container">
            <div className="row">
                <Navbar variant="light" bg="light" expand="lg" className='buscaProfe'>
                    <Container fluid>
                        <Navbar.Brand href="#home">Buscar Profe Por Materia:</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown id="nav-dropdown-dark-example" title="materia" menuVariant="dark">
                            <NavLink to={`materia/1`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>

                                <NavDropdown.Item>Matematicas</NavDropdown.Item>

                            </NavLink>

                            <NavLink to={`materia/2`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>

                                <NavDropdown.Item>Lengua</NavDropdown.Item>

                            </NavLink>

                            <NavLink to={`materia/3`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavDropdown.Item>Quimica</NavDropdown.Item>
                            </NavLink>
                            
                            <NavLink to={`materia/4`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavDropdown.Item id="universitarios">Universitarios</NavDropdown.Item>  
                            </NavLink>
                          
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="row fila">
                <div className="col-lg-6">
                    <p>
                        Texto De prueba
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img src={Estudio} className='fotoNene'/>
                </div>
            </div>

       
        </div>
    )
}

export default Inicio;