import { Link } from "react-router-dom";
import "./Client.css";

const Client = ({ nombre, contacto, estatus, id }) => {
  return (
    <div className="client-component">
      <span className="client-component-nombre">{nombre}</span>
      <span className="client-component-contacto">{contacto}</span>
      <span className="client-component-estatus">{estatus}</span>
      <Link to={`/asignar-cita/${id}`} className="client-component-setAppointment" ><span className="material-icons">event</span></Link>
      
      
    </div>
  );
};

export default Client;
