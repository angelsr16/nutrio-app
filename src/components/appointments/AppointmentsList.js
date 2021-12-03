import "./AppointmentsList.css";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";
import { connect } from "react-redux";
import Button from "../layout/Button";
import ClientAppointmentsList from "./ClientAppointmentsList";
import NutriniotistAppointments from "./NutriniotistAppointments";

const AppointmentsList = ({ appointments, users, uid }) => {
  const renderAppointments = () => {
    if (appointments && users && uid) {
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
              />
            </div>
          </>
        );
      }
    }
  };

  return (
    <div className="appointments">
      <div className="appointments-container">
        <h2>Citas</h2>

        <div className="appointments-header">
          <p>Pendientes</p>
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
