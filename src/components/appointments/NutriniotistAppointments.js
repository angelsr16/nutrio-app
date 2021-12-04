import React from "react";
import Appointment from "./Appointment";

const NutriniotistAppointments = ({
  appointments,
  users,
  madeAppointments,
}) => {
  return (
    <>
      {Object.keys(appointments).map((key, i) => {
        const appointment = appointments[key];
        if (madeAppointments) {
          if(appointment.status === "Realizada"){
            return (
              <Appointment
                key={i}
                fecha={`${new Date(
                  appointments[key].appointmentDateInMillis
                ).toLocaleDateString()} ${new Date(
                  appointments[key].appointmentDateInMillis
                ).toLocaleTimeString()}`}
                cliente={users[appointments[key].clientId]}
                estatus={appointments[key].status}
                appointmentId={key}
                hasBeenConducted={true}
              />
            );
          }
        } else {
          if (
            appointment.appointmentDateInMillis > new Date().getTime() &&
            appointment.status === "Pendiente"
          ) {
            return (
              <Appointment
                key={i}
                fecha={`${new Date(
                  appointments[key].appointmentDateInMillis
                ).toLocaleDateString()} ${new Date(
                  appointments[key].appointmentDateInMillis
                ).toLocaleTimeString()}`}
                cliente={users[appointments[key].clientId]}
                estatus={appointments[key].status}
                appointmentId={key}
              />
            );
          }
        }
      })}
    </>
  );
};

export default NutriniotistAppointments;
