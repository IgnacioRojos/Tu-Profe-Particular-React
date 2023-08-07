import Item from "../item/Item";
import "./listadoProfes.css"
const ListadoProfes= ({pro}) =>{

    return(
        <div className="listGroup">
            {pro.map(a => <Item key={a.id}{...a}/>)}
        </div>
    )


}

export default ListadoProfes;