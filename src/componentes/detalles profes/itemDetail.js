import Foto from "./img/foto perfil.jpeg"
import React from "react";



const ItemDetail =({nombre,materia,provincia})=>{


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={Foto}/>
                </div>
                <div className="col-lg-6">
                    <h3> Hola mi nombre es: {nombre}</h3><br/>
                    <span> Me dedico a dar la materia {materia} en los horarios que usted disponga<br/>
                        soy de la provincia {provincia}.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;