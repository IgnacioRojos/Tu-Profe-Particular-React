import Estudio from "./img/chicoEstudiando.jpg";
import { Link } from "react-router-dom";
import "./inicio.css";



const Inicio = ()=>{
    return(
        <div className="inicio">
            <div className="hero-content">
                <div className="texto">
                    <h1>🧑‍🏫 Tu Profe Particular</h1>
                    <h2>Conectá con los mejores docentes, rápido y sin complicaciones.</h2>
                    <p>
                        Encontrá profesores particulares por materia, nivel y ubicación.
                        Simple, accesible y pensado para vos.
                    </p>
                    <div className="botones">
                        <Link to="/Profes" className="btn-principal">Ver Profes</Link>
                        <Link to="/Contacto" className="btn-principal">Publicar como Profe</Link>
                    </div>
                </div>
                <div className="imagen">
                    <img src={Estudio} alt="Estudiante estudiando" />
                </div>
            </div>
        </div>
    )
}

export default Inicio;