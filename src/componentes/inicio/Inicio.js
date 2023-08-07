import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Inicio = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>
                        lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </div>
            </div>

            <div className="row">
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home">Buscar Profe Por Provincia:</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown id="nav-dropdown-dark-example" title="Provincia" menuVariant="dark">
                            <NavDropdown.Item id="matematicas">Matematicas</NavDropdown.Item>
                            <NavDropdown.Item id="lengua">Lengua</NavDropdown.Item>
                            <NavDropdown.Item id="quimica">Quimica</NavDropdown.Item>
                            <NavDropdown.Item id="universitarios">Universitarios</NavDropdown.Item>
                            <NavDropdown.Item id="fisica">fisica</NavDropdown.Item>                          
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Inicio;