import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Foto from "./img/foto perfil.jpeg";
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ nombre, materia, id, provincia }) => {
  return (
    <Card className="tarjeta">
      <Card.Img variant="top" src={Foto} className="tarjeta-img" />

      <Card.Body className="tarjeta-body">
        <Card.Title className="tarjeta-titulo">{nombre}</Card.Title>
        <Card.Text className="tarjeta-texto">
          <strong>Materia:</strong> {materia} <br />
          <small className="tarjeta-provincia">📍 {provincia}</small>
        </Card.Text>

        <Link to={`/Item/${id}`}>
          <Button className="btn-detalle">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;