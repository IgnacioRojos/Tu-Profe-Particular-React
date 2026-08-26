# 🎓 Tu Profe Particular - React JS

🌐 **[Ver demo en Netlify](https://tuprofeparticularreactjs.netlify.app/)**

**Tu Profe Particular** es una aplicación desarrollada en **React JS** que simula un e-commerce educativo donde los estudiantes pueden buscar, explorar y agregar al carrito diferentes clases particulares de materias de interés.

Esta app está pensada como **práctica de React y simulación de flujo de compra**, utilizando una **base de datos local para la gestión de cursos** y demostrando habilidades de rutas dinámicas, manejo de estados, uso de contextos y modularización de componentes en React.

**🔹 Con Tu Profe Particular podrás:**
✅ Visualizar un catálogo de cursos con precios e imágenes.  
✅ Filtrar por categorías para encontrar la materia deseada.  
✅ Consultar los detalles de cada curso.  
✅ Agregar cursos al carrito con control de cantidad.  
✅ Simular la compra de cursos con cálculo de total.

## 🌟 **Características principales**

✅ Catálogo de cursos con imágenes, precios y descripciones  
✅ Filtrado de cursos por categoría  
✅ Vista de detalle de cada curso  
✅ Carrito de compras con control de unidades  
✅ Datos de profesores simulados de forma asincrónica (`asyncMock.js`)  
✅ Preparado para integración de pasarela de pagos y backend real en futuras versiones

---

## 🛠️ **Tecnologías utilizadas**

- **React JS** (react, react-dom, react-router-dom)
- **Datos simulados** en `asyncMock.js` (promesas con `setTimeout`, sin backend real)
- **Bootstrap** (diseño responsivo)
- **JavaScript ES6+**
- **CSS3**
- **Git y GitHub**

---

## 📂 **Estructura de componentes**

| Componente | Descripción |
|------------|-------------|
| navBar | Barra de navegación |
| Inicio | Landing / sección de bienvenida |
| listadoProfes | Renderizado del catálogo de profesores |
| Profes | Tarjeta individual de profesor |
| detalleProfes / itemDetail | Vista detallada del profesor seleccionado |
| Item | Tarjeta individual reutilizable |
| Ejercicios | Sección de ejercicios de práctica |
| Contacto | Formulario de contacto |
| footer | Pie de página |

---

🚀 Instalación y ejecución local
1️⃣ Clonar el repositorio:

git clone https://github.com/IgnacioRojos/Tu-Profe-Particular-React.git

2️⃣ Instalar dependencias:

npm install

3️⃣ Ejecutar la aplicación en modo desarrollo:

npm start

La aplicación se abrirá automáticamente en http://localhost:3000.

🌐 También puedes ver la aplicación en producción aquí: https://tuprofeparticularreactjs.netlify.app/
