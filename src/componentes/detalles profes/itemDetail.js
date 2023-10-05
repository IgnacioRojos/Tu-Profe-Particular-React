import Foto from "./img/foto perfil.jpeg"
import React from "react";
import Button from 'react-bootstrap/Button';
import "./itemDetail.css"



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
                    <div className="row">
                        <div className="col-lg-6">
                            <Button variant="primary" className="botonContact">WhatsApp</Button>
                        </div>
                        <div className="col-lg-6">
                            <Button variant="primary" className="botonContact">Correo Electrónico</Button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;