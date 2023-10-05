import { useEffect,useState } from "react";
import { getProfes, getProfesCategoria } from "../../asyncMock";
import { Bounce } from "react-awesome-reveal";
import ListadoProfes from "../contendor Profes/listadoProfes";
import "./profes.css"
import { useParams } from "react-router-dom";


const Profesores = ()=>{
    const [profes, setProfes]= useState([])
    const {profeCategoria}= useParams()
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

        /*getProfes()
            .then(response=>{
                setProfes(response)
            })
            .catch(err=>{
                console.error(err)
            })
    },[]);*/

    console.log(profes)

    
    
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
                <ListadoProfes pro={profes}/>
            </div>
        )
    }

    
}

export default Profesores;


