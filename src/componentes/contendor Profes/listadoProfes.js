import Item from "../item/Item";
import "./listadoProfes.css";

const ListadoProfes = ({ pro }) => {
    return (
        <div className="listGroup">
            {pro.map((profe) => (
                <Item key={profe.id} {...profe} />
            ))}
        </div>
    );
};

export default ListadoProfes;
