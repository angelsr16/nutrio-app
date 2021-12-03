import { Link } from "react-router-dom";
import "./Appointment.css";

const Appointment = ({
  appointmentId,
  cliente,
  fecha,
  hora,
  estatus,
  id,
  isClient,
  hasBeenConducted,
}) => {
  // console.log(cliente.uid);
  return (
    <>
      {cliente &&
        (isClient ? (
          <div className="appointment">
            <p className="appointment-fecha">{fecha}</p>
            <p className="appointment-hora">{hora}</p>
            <p className="appointment-estatus">{estatus}</p>
            {hasBeenConducted && (
              <Link
                to={`/avances/${cliente.uid}`}
                className="appointment-registrar"
              >
                Ver expediente
              </Link>
            )}
          </div>
        ) : (
          <div className="appointment">
            <p className="appointment-fecha">{cliente.name}</p>
            <p className="appointment-hora">{fecha}</p>
            <p className="appointment-estatus">{estatus}</p>
            <Link
              to={`/registro-avances/${appointmentId}`}
              className="appointment-registrar"
            >
              Registrar
            </Link>
          </div>
        ))}
    </>
  );
};

export default Appointment;
