import React, { useState } from 'react';
import './contacto.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podés integrar EmailJS, Formspree, o tu backend
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    setFormulario({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-container">
      <h2>📬 Contacto</h2>
      <p>¿Tenés alguna duda o querés más información? ¡Escribinos!</p>
      <form onSubmit={handleSubmit} className="contacto-form">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="4"
          value={formulario.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default Contacto;