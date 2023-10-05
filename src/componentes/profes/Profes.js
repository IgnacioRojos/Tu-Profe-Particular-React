import { useEffect,useState } from "react";
import { getProfes, getProfesCategoria } from "../../asyncMock";
import { Bounce } from "react-awesome-reveal";
import ListadoProfes from "../contendor Profes/listadoProfes";
import "./profes.css"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Profesores = ()=>{
    const [profes, setProfes]= useState([])
    const {profeCategoria}= useParams()
    useEffect(()=>{

        const asyncFunc = profeCategoria  ? ()=> getProfesCategoria(profeCategoria) : getProfes
        
        asyncFunc(profeCategoria)
            .then(respose =>{
                setProfes(respose)
            })
            .catch(err=>{
                console.log(err)
            })
    },[profeCategoria]);

        /*getProfes()
            .then(response=>{
                setProfes(response)
            })
            .catch(err=>{
                console.error(err)
            })
    },[]);*/



    
    
    if (profes.length===0){
        return(
            <h1 className="tituloAlerta">
                <Bounce duration={5000}>
                    cargando...
                </Bounce>
            </h1>
            
        )
    }else{
        return(
            <div>
                <div className="row">
                    <Navbar variant="light" bg="light" expand="lg" className='buscaProfe'>
                        <Container fluid>
                            <Navbar.Brand href="#home">Buscar Profe Por Materia:</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown id="nav-dropdown-dark-example" title="materia" menuVariant="dark">
                                <NavDropdown.Item>
                                <NavLink to={`materia/100`}>{({ isActive, isPending }) => (<span className={isActive ? "active" : ""}>matematicas</span>)}</NavLink>
                                </NavDropdown.Item>
                                

                                
                          
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <ListadoProfes pro={profes}/>
            </div>
        )
    }

    
}

export default Profesores;


 

/*<NavLink to={`materia/2`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>

<NavDropdown.Item>Lengua</NavDropdown.Item>

</NavLink>

<NavLink to={`materia/3`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
<NavDropdown.Item>Quimica</NavDropdown.Item>
</NavLink>

<NavLink to={`materia/4`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
<NavDropdown.Item id="universitarios">Universitarios</NavDropdown.Item>  
</NavLink>

</NavDropdown>*/