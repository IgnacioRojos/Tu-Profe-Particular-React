import Estudio from "./img/chicoEstudiando.jpg";
import "./inicio.css";



const Inicio = ()=>{
    return(
        <div className="container">
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