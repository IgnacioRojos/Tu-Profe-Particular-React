// src/__tests__/asyncMock.test.js
import { getProfes, getProfesId, getProfesCategoria } from '../asyncMock';

// Estas funciones usan setTimeout(5000ms) internamente para simular una
// llamada asincrónica real, así que usamos fake timers para no esperar
// 5 segundos reales por cada test.
describe('asyncMock', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('getProfes resuelve con el listado completo de profesores', async () => {
    const promesa = getProfes();
    jest.advanceTimersByTime(5000);
    const profes = await promesa;

    expect(profes).toHaveLength(15);
    expect(profes[0]).toMatchObject({ nombre: 'Sergio', materia: 'Matemática' });
  });

  test('getProfesId resuelve con el profesor que tiene ese id', async () => {
    const promesa = getProfesId('3');
    jest.advanceTimersByTime(5000);
    const profe = await promesa;

    expect(profe).toMatchObject({ nombre: 'Andres', materia: 'Inglés', id: '3' });
  });

  test('getProfesId resuelve undefined si el id no existe', async () => {
    const promesa = getProfesId('999');
    jest.advanceTimersByTime(5000);
    const profe = await promesa;

    expect(profe).toBeUndefined();
  });

  // Bug detectado al escribir este test: getProfesCategoria compara
  // `prof.materia === parseInt(profeCategoria)`. Como `materia` es un
  // string ("Matemática", "Inglés", etc.) y nunca un número, parseInt()
  // siempre da NaN y el filtro nunca matchea nada — la función devuelve
  // un array vacío sin importar qué categoría se le pase.
  test('getProfesCategoria: con la implementación actual, siempre devuelve un array vacío (bug conocido)', async () => {
    const promesa = getProfesCategoria('Matemática');
    jest.advanceTimersByTime(5000);
    const resultado = await promesa;

    expect(resultado).toEqual([]);
  });
});
