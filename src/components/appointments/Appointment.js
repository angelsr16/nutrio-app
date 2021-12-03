import { Link } from "react-router-dom";
import "./Appointment.css";

const Appointment = ({ cliente, fecha, estatus, id }) => {
  // console.log(cliente.uid);
  return (
    <>
      {cliente && (
        <div className="appointment">
          <p className="appointment-fecha">{cliente.name}</p>
          <p className="appointment-hora">{fecha}</p>
          <p className="appointment-estatus">{estatus}</p>
          <Link
            to={`/registro-avances/${cliente.uid}`}
            className="appointment-registrar"
          >
            Registrar
          </Link>
        </div>
      )}
    </>
  );
};

export default Appointment;
