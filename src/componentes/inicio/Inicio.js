import Estudio from "./img/chicoEstudiando.jpg";
import "./inicio.css";



const Inicio = ()=>{
    return(
        <div className="container">
            <div className="row fila">
                <div className="welcome-container">
                    <h1 role="img" aria-label="profesor">🧑‍🏫 Bienvenido a <strong>Tu Profe Particular</strong></h1>
                    <p>Esta plataforma te permite encontrar profesores particulares según la materia y nivel que necesites.</p>
                    <ul>
                        <li>✔️ Navegá por las materias disponibles.</li>
                        <li>✔️ Explorá los perfiles de los profes, con su experiencia y disponibilidad.</li>
                        <li>✔️ Agregá tus favoritos y contactalos fácilmente.</li>
                    </ul>
                    <p>
                        El objetivo es conectar alumnos con docentes de forma <strong>simple, rápida y gratuita</strong>.
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