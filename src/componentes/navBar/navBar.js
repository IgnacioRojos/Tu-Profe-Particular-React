import './navBar.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import foto from './estudio.jpg';

const NavBar = () =>{
    return(
        
        <nav className='header'>

            <Link to={"/"}><img className='imgTitulo' src={foto} width="90px"/></Link>

            <Link to={"/"} className='botonNav'><Button variant="primary" className='botonN'>Inicio</Button></Link>
            
            <Link to={"/Profes"} className='botonNav'><Button variant="primary" className='botonN'>Profes</Button></Link>

            <Link to={"/Contacto"} className='botonNav'><Button variant="primary" className='botonN'>Contacto</Button></Link>

             <Link to={"/Ejercicios"} className='botonNav'><Button variant="primary" className='botonN'>Ejercicios</Button></Link>

        </nav>
    
        
       
    )

}

export default NavBar;