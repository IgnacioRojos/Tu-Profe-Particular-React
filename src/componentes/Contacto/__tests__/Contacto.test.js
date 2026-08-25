// src/componentes/Contacto/__tests__/Contacto.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Contacto from '../Contacto';

describe('Contacto', () => {
  beforeEach(() => {
    // El componente usa window.alert al enviar el formulario
    window.alert = jest.fn();
  });

  test('permite completar los campos del formulario', () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Ignacio' } });
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'ignacio@test.com' } });
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Hola, quiero una clase' } });

    expect(screen.getByLabelText(/nombre/i)).toHaveValue('Ignacio');
    expect(screen.getByLabelText(/correo electrónico/i)).toHaveValue('ignacio@test.com');
    expect(screen.getByLabelText(/mensaje/i)).toHaveValue('Hola, quiero una clase');
  });

  test('al enviar el formulario, muestra un alert y limpia los campos', () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Ignacio' } });
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'ignacio@test.com' } });
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Hola, quiero una clase' } });

    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(window.alert).toHaveBeenCalledWith('Mensaje enviado. ¡Gracias por contactarnos!');
    expect(screen.getByLabelText(/nombre/i)).toHaveValue('');
    expect(screen.getByLabelText(/correo electrónico/i)).toHaveValue('');
    expect(screen.getByLabelText(/mensaje/i)).toHaveValue('');
  });
});
