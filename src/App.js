import './App.css';
import NavBar from './componentes/navBar/navBar';
import Inicio from './componentes/inicio/Inicio';
import Profes from './componentes/profes/Profes';
import Contacto from './componentes/contacto/Contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProfes from './componentes/detalles profes/detalleProfes';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Profes" element={<Profes/>} /> 
            <Route path="/Contacto" element={<Contacto/>} />  
            <Route path="/Item/:id" element={<DetalleProfes/>} />  
          </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
