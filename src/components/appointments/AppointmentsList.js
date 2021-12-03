import "./AppointmentsList.css";
import { useState } from "react";
import Appointment from "./Appointment";
import { connect } from "react-redux";
import Button from "../layout/Button";

const AppointmentsList = ({ appointments, users, uid }) => {
  const [lateAppointmentsFilter, setLateAppointmentsFilter] = useState(false);

  return (
    <div className="appointments">
      <div className="appointments-container">
        <h2>Citas</h2>

        <div className="appointments-header">
          <p>Pendientes</p>
        </div>
        <div className="appointments-subheader">
          <p className="appointments-hora">Nombre</p>
          <p className="appointments-fecha">Fecha y hora</p>
          <p className="appointments-estatus">Estatus</p>
        </div>
        <div className="appointments-body">
          {appointments && users && uid && users[uid].rol === "Cliente"
            ? Object.keys(appointments)
                .filter((key) => appointments[key].clientId === uid)
                .map(
                  (key, i) =>
                    // console.log(appointments[key]),
                    appointments[key].appointmentDateInMillis >
                      new Date().getTime() && (
                      <Appointment
                        key={i}
                        fecha={`${new Date(
                          appointments[key].appointmentDateInMillis
                        ).toLocaleDateString()} ${new Date(
                          appointments[key].appointmentDateInMillis
                        ).toLocaleTimeString()}`}
                        cliente={users[appointments[key].clientId]}
                        estatus={appointments[key].status}
                      />
                    )
                )
            : appointments &&
              users &&
              Object.keys(appointments).map(
                (key, i) =>
                  appointments[key].appointmentDateInMillis >
                    new Date().getTime() &&
                  (console.log(appointments[key].clientId),
                  (
                    <Appointment
                      key={i}
                      fecha={`${new Date(
                        appointments[key].appointmentDateInMillis
                      ).toLocaleDateString()} ${new Date(
                        appointments[key].appointmentDateInMillis
                      ).toLocaleTimeString()}`}
                      cliente={users[appointments[key].clientId]}
                      estatus={appointments[key].status}
                    />
                  ))
              )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointments: state.firestore.data.appointments,
    users: state.firestore.data.users,
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(AppointmentsList);
