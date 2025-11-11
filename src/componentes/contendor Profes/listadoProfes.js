import Item from "../item/Item";
import "./listadoProfes.css";
import { Fade } from "react-awesome-reveal";

const ListadoProfes = ({ pro }) => {
  return (
    <div className="listGroup">
      {pro.map((profe, index) => (
        <Fade key={profe.id} delay={index * 100} triggerOnce>
          <Item {...profe} />
        </Fade>
      ))}
    </div>
  );
};

export default ListadoProfes;
