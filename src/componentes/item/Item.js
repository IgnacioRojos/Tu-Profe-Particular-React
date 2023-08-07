
import Card from 'react-bootstrap/Card';
import "./item.css"
import React from "react";
import Button from 'react-bootstrap/Button';
import Foto from "./img/foto perfil.jpeg";
import { Link } from 'react-router-dom';



const Item = ({nombre,materia,id,provincia})=>{
    return(
        <Card style={{ width: '18rem' }} className='tarjeta'>

            <Card.Img variant="top" src={Foto} />
            
            <Card.Body>

                <Card.Title><h3>{nombre}</h3></Card.Title>

                <Card.Text>
                    <span>{nombre} Se Dedica A Dar La Materia: {materia}</span>
                </Card.Text>

                <Button variant="info"><Link to={`/Item/${id}`}>Ver Detalle</Link></Button>

            </Card.Body>
        </Card>
    )
}

export default Item;