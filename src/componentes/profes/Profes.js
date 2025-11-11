import { useEffect,useState } from "react";
import { getProfes, getProfesCategoria } from "../../asyncMock";
import { Bounce } from "react-awesome-reveal";
import ListadoProfes from "../contendor Profes/listadoProfes";
import "./profes.css"
import { useParams } from "react-router-dom";


const Profesores = ()=>{
    const [profes, setProfes]= useState([])
    const {profeCategoria}= useParams()
    const [materiaSeleccionada, setMateriaSeleccionada] = useState("");
    useEffect(()=>{

        const asyncFunc = profeCategoria  ? ()=> getProfesCategoria(profeCategoria) : getProfes
        
        asyncFunc(profeCategoria)
            .then(respose =>{
                setProfes(respose)
            })
            .catch(err=>{
                console.log(err)
            })
    },[profeCategoria]);

    const profesFiltrados = materiaSeleccionada === ""
        ? profes
        : profes.filter((profe) => profe.materia === materiaSeleccionada);

    
    
    if (profes.length===0){
        return(
            <h1 className="tituloAlerta">
                <Bounce duration={5000}>
                    cargando...
                </Bounce>
            </h1>
            
        )
    }else{
        return(
            
            <div>
                <div className="row">
                    <div className="filtro-materia ">
                        <select value={materiaSeleccionada} onChange={(e) => setMateriaSeleccionada(e.target.value)}>
                            <option value="">Todas las materias</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Inglés">Inglés</option>
                            <option value="Física">Física</option>
                            <option value="Historia">Historia</option>
                        </select>
                    </div>





                </div>
                
                <ListadoProfes pro={profesFiltrados}/>
            </div>
        )
    }

    
}

export default Profesores;


 

