import { useEffect, useState } from "react";
import { getProfesId } from "../../asyncMock";
import ItemDetail from "./itemDetail";
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

   
    console.log(getProfesId())



    
    return(
        <div className="detalleProfes">
            <ItemDetail {...profes}/>  
        </div>
    )
        
    
}

export default DetalleProfes;