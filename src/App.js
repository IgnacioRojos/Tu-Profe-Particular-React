import './App.css';
import NavBar from './componentes/navBar/navBar';
import Inicio from './componentes/inicio/Inicio';
import Profes from './componentes/profes/Profes';
import Ejercicios from "./componentes/ejercicios/Ejercicios"
import Contacto from './componentes/Contacto/Contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProfes from './componentes/detalles profes/detalleProfes';
import Footer from './componentes/footer/footer';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Profes" element={<Profes/>} />
            <Route path="/materia/:profeCategoria" element={<Profes/>} /> 
            <Route path="/Contacto" element={<Contacto/>} />  
            <Route path="/Ejercicios" element={<Ejercicios/>} />  
            <Route path="/Item/:profesoresId" element={<DetalleProfes/>} />  
          </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
