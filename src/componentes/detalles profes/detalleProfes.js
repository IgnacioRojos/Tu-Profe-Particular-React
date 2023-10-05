import { useEffect, useState } from "react";
import { getProfesId } from "../../asyncMock";
import ItemDetail from "./itemDetail";
import { Bounce } from "react-awesome-reveal";
import { useParams } from "react-router-dom";

const DetalleProfes = ()=>{
    const [profes, setProfes]= useState([])
    const {profesoresId} = useParams()

    useEffect(()=>{
        getProfesId(profesoresId)
            .then(response =>{
                setProfes(response)
            })
            .catch(err =>{
                console.error(err);
            })
    },[profesoresId])

   



    if(profes.length===0){
        return(
            <h1 className="tituloAlerta">
                <Bounce duration={5000}>
                    cargando...
                </Bounce>
            </h1>
        )
    }else{
        return(
            <div className="detalleProfes">
                <ItemDetail {...profes}/>  
            </div>
        )
        
    }
   
        
    
}

export default DetalleProfes;