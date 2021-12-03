import { toast } from "react-toastify";

const appointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_APPOINTMENT":
      toast.success("Cita asignada");
      console.log("state: ", state);
      return state;
    case "SET_APPOINTMENT_ERROR":
      toast.error("Error, intente de nuevo");
      return state;
    case "CONDUCT_APPOINTMENT":
      toast.info("Avances registrado correctamente");
      return state;
    case "CONDUCT_APPOINTMENT_ERROR":
      toast.error("Hubo un error al registrar avances");
      return state;
    case "CONDUCT_APPOINTMENT_ASSIGN_DIET":
      toast.info("Dieta asignada correctamente");
      return state;
    case "CONDUCT_APPOINTMENT_ASSIGN_DIET_ERROR":
      toast.error("Hubo un error al asignar la nueva dieta");
      return state;
    default:
      return state;
  }
};

export default appointmentReducer;