import { useEffect,useState } from "react";
import { getProfes } from "../../asyncMock";
import ListadoProfes from "../contendor Profes/listadoProfes";


const Profesores = ()=>{
    const [profes, setProfes]= useState([])
    useEffect(()=>{
        getProfes()
            .then(response=>{
                setProfes(response)
            })
            .catch(err=>{
                console.error(err)
            })
    },[]);

    console.log(profes)

    return(
        <div>
            <ListadoProfes pro={profes}/>
        </div>
    )

    
}

export default Profesores;