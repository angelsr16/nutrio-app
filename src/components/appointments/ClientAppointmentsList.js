import React from "react";
import Appointment from "./Appointment";

const ClientAppointmentsList = ({
  appointments,
  users,
  uid,
  hasBeenConducted,
}) => {
  return (
    <>
      {Object.keys(appointments)
        .filter((key) => appointments[key].clientId === uid)
        .map((key, i) => {
          const appointment = appointments[key];

          if (appointment.appointmentDateInMillis > new Date().getTime()) {
            if (hasBeenConducted) {
              if (appointment.status === "Realizada") {
                return (
                  <Appointment
                    key={i}
                    fecha={`${new Date(
                      appointment.appointmentDateInMillis
                    ).toLocaleDateString()}`}
                    hora={`${new Date(
                      appointment.appointmentDateInMillis
                    ).toLocaleTimeString()}`}
                    cliente={users[appointments[key].clientId]}
                    estatus={appointment.status}
                    isClient={true}
                    hasBeenConducted={hasBeenConducted}
                    appointmentId={key}
                  />
                );
              }
            } else {
              if (appointment.status === "Pendiente") {
                return (
                  <Appointment
                    key={i}
                    fecha={`${new Date(
                      appointment.appointmentDateInMillis
                    ).toLocaleDateString()}`}
                    hora={`${new Date(
                      appointment.appointmentDateInMillis
                    ).toLocaleTimeString()}`}
                    cliente={users[appointments[key].clientId]}
                    estatus={appointment.status}
                    isClient={true}
                    hasBeenConducted={hasBeenConducted}
                  />
                );
              }
            }
          }
        })}
    </>
  );
};

export default ClientAppointmentsList;
