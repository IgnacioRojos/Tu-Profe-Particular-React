import './navBar.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import foto from '../inicio/img/estudio.png';

const NavBar = () =>{
    return(
        <nav className='header'>

            <img className='imgTitulo' src={foto} width="90px"/>

            <Link to={"/"}><Button variant="primary">Inicio</Button></Link>
            
            <Link to={"/Profes"}><Button variant="primary">Profes</Button></Link>

            <Link to={"/Contacto"}><Button variant="primary">Contacto</Button></Link>



        

        </nav>
    
        
       
    )

}

export default NavBar;