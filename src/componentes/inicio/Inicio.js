import Estudio from "./img/chicoEstudiando.jpg";
import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import "./inicio.css";

const Inicio = () => {
  return (
    <section className="inicio">
      <div className="hero-content">
        <Slide direction="left" triggerOnce>
          <div className="texto">
            <h1 className="titulo">🧑‍🏫 Tu Profe Particular</h1>
            <h2 className="subtitulo">Conectá con los mejores docentes en segundos</h2>
            <p className="descripcion">
              Buscá profesores particulares por materia, nivel o ubicación. 
              Rápido, confiable y diseñado para ayudarte a aprender más fácil.
            </p>

            <div className="botones">
              <Link to="/Profes" className="btn-principal">Ver Profes</Link>
              <Link to="/Contacto" className="btn-principal">Publicar como Profe</Link>
            </div>
          </div>
        </Slide>

        <Zoom triggerOnce>
          <div className="imagen">
            <img src={Estudio} alt="Estudiante aprendiendo con su profesor" />
          </div>
        </Zoom>
      </div>

      <Fade triggerOnce cascade damping={0.2}>
        <div className="beneficios">
          <div className="beneficio-card">
            <h3>🔍 Encontrá fácil</h3>
            <p>Filtrá por materia, nivel y ubicación.</p>
          </div>
          <div className="beneficio-card">
            <h3>⚡ Contactá rápido</h3>
            <p>Sin intermediarios ni esperas largas.</p>
          </div>
          <div className="beneficio-card">
            <h3>💬 Opiniones reales</h3>
            <p>Leé reseñas y elegí con confianza.</p>
          </div>
        </div>
      </Fade>

      <Fade triggerOnce cascade damping={0.3}>
        <div className="reseñas">
          <h2 className="reseñas-titulo">⭐ Lo que dicen nuestros estudiantes</h2>
          <div className="reseñas-container">
            <div className="reseña-card">
              <p>"Gracias a esta plataforma encontré una profe increíble que me ayudó a aprobar Matemática."</p>
              <h4>- Lourdes A.</h4>
            </div>
            <div className="reseña-card">
              <p>"Todo muy fácil de usar, encontré clases de inglés online en minutos."</p>
              <h4>- Alejo T.</h4>
            </div>
            <div className="reseña-card">
              <p>"Excelente atención y profesores muy preparados. La recomiendo 100%."</p>
              <h4>- Agustina P.</h4>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Inicio;
