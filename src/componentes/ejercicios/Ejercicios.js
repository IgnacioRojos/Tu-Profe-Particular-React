import Button from 'react-bootstrap/Button';
import './ejercicios.css';

const Ejercicios = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-lg-6">
          <h2>Álgebra 📘</h2>
          <p>Aquí dejamos unos ejercicios de álgebra resueltos para que puedas practicar.</p>
          <Button variant="outline-success">
            <a href="../docs/algebra.jpg" className="linkDescarga" download="algebra">📥 Descargar archivo</a>
          </Button>
        </div>

        <div className="col-lg-6">
          <h2>Análisis Matemático 📗</h2>
          <p>Aquí dejamos unos ejercicios de análisis matemático resueltos para que puedas practicar.</p>
          <Button variant="outline-success">
            <a href="../docs/analisis matematico.jpg" className="linkDescarga" download="analisis">📥 Descargar archivo</a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Ejercicios;