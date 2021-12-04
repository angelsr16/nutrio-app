import "./AppointmentsList.css";
// import { useState, useEffect } from "react";
// import Appointment from "./Appointment";
import { connect } from "react-redux";
// import Button from "../layout/Button";
import ClientAppointmentsList from "./ClientAppointmentsList";
import NutriniotistAppointments from "./NutriniotistAppointments";
import { useState } from "react";

const AppointmentsList = ({ appointments, users, uid }) => {
  const [madeAppointmentsFilter, setMadeAppointmentsFilter] = useState(false);

  const toggleFilter = () => {
    setMadeAppointmentsFilter(!madeAppointmentsFilter);
  };

  const renderAppointments = () => {
    if (appointments) {
      if (users && uid) {
        if (users[uid].rol === "Cliente") {
          return (
            <>
              <div className="appointments-subheader">
                <p className="appointments-hora">Fecha</p>
                <p className="appointments-fecha">Hora</p>
                <p className="appointments-estatus">Estatus</p>
              </div>
              <div className="appointments-body">
                <ClientAppointmentsList
                  appointments={appointments}
                  users={users}
                  uid={uid}
                />
                <div className="appointments-header">
                  <p>Realizadas</p>
                </div>
                <ClientAppointmentsList
                  appointments={appointments}
                  users={users}
                  uid={uid}
                  hasBeenConducted={true}
                />
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="appointments-subheader">
                <p className="appointments-hora">Nombre</p>
                <p className="appointments-fecha">Fecha y hora</p>
                <p className="appointments-estatus">Estatus</p>
              </div>
              <div className="appointments-body">
                <NutriniotistAppointments
                  appointments={appointments}
                  users={users}
                  madeAppointments={madeAppointmentsFilter}
                />
              </div>
            </>
          );
        }
      }
    }
  };

  return (
    <div className="appointments">
      <div className="appointments-container">
        <h2>Citas</h2>
        {users && uid && users[uid].rol === "Nutriologo" && (
          <p onClick={toggleFilter}>
            Citas {madeAppointmentsFilter ? "Pendientes" : "Realizadas"}
          </p>
        )}
        <div className="appointments-header">
          <p>{madeAppointmentsFilter ? "Realizadas" : "Pendientes"}</p>
        </div>
        {renderAppointments()}
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
