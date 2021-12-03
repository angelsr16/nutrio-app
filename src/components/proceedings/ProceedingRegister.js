import { useState } from "react";
import "./ProceedingRegister.css";
import NewDietForm from "./NewDietForm";
import ProceedingForm from "./ProceedingForm";
import Button from "../layout/Button";
import { WeekDays } from "../../utils/WeekDays";
import { conductAppointment } from "../../actions/appointmentActions";
import { connect } from "react-redux";
import { withRouter } from "../../utils/withRouter";
import { toast } from "react-toastify";

const ProceedingRegister = ({ client, conductAppointment }) => {
  const [newDietData, setNewDietData] = useState({
    desayuno: new WeekDays(),
    colacion_m: new WeekDays(),
    comida: new WeekDays(),
    colacion_v: new WeekDays(),
    cena: new WeekDays(),
  });

  const handleChangeDiet = (e, mealType, day) => {
    e.preventDefault();
    setNewDietData({
      ...newDietData,
      [mealType]: {
        ...newDietData[mealType],
        [day]: e.target.value,
      },
    });
  };

  const [proceedingData, setProceedingData] = useState({
    peso: "",
    grasa: "",
    agua: "",
    muscular: "",
    visceral: "",
    observaciones: "",
    recomendaciones: "",
  });

  const handleChangeProceeding = (e) => {
    e.preventDefault();
    setProceedingData({
      ...proceedingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    conductAppointment(proceedingData, newDietData, client.uid);
    toast.info("Subiendo información...");
    
    setNewDietData({
      desayuno: new WeekDays(),
      colacion_m: new WeekDays(),
      comida: new WeekDays(),
      colacion_v: new WeekDays(),
      cena: new WeekDays(),
    });
    setProceedingData({
      peso: "",
      grasa: "",
      agua: "",
      muscular: "",
      visceral: "",
      observaciones: "",
      recomendaciones: "",
    });
  };

  return (
    <div className="proceedingRegister">
      {client ? (
        <div className="proceedingRegister-container">
          <h2>Registro de avances</h2>

          <h3>
            Cliente: <span>{client && client.name}</span>
          </h3>

          <form className="proceedingRegister-form">
            <ProceedingForm
              formData={proceedingData}
              handleChange={handleChangeProceeding}
            />
            <h2>Asignar nueva dieta</h2>
            <NewDietForm
              formData={newDietData}
              handleChange={handleChangeDiet}
            />
            <Button text="Registrar" OnClick={handleSubmit} />
          </form>
        </div>
      ) : (
        <p>No hay ningún cliente con ese id</p>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    client:
      state.firestore.data.users && state.firestore.data.users[props.params.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    conductAppointment: (proceedingForm, newDietForm, clientId) =>
      dispatch(conductAppointment(proceedingForm, newDietForm, clientId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProceedingRegister)
);
