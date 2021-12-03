import "./AssignAppointment.css";
import { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "../../utils/withRouter";
import { setAppointment } from "../../actions/appointmentActions";
import Button from "../layout/Button";
import CustomDatePicker from "../layout/CustomDatePicker";
import { toast } from "react-toastify";

const AssignAppointment = ({
  currentUser,
  setAppointment,
  appointmentDates,
}) => {
  
  const [formData, setFormData] = useState({
    clientId: currentUser ? currentUser.uid : "",
    appointmentDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentUser){
      toast.info("Asignando cita...");
      setAppointment(formData);
      setFormData({});
    }
  };

  return (
    <div className="assignAppointment">
      <div className="assignAppointment-container">
        <h2>Asignar cita</h2>
        <h3>
          Nombre cliente:{" "}
          <span className="appointment-clientName">
            {currentUser && currentUser.name}
          </span>
        </h3>

        <form className="assignAppointment-form">
          <div className="form-group">
            <CustomDatePicker formData={formData} setFormData={setFormData} appointmentDates={appointmentDates} />
          </div>

          <Button text="Asignar cita" OnClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    currentUser:
      state.firestore.data.users && state.firestore.data.users[props.params.id],
    appointmentDates: state.firestore.data.appointmentDates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAppointment: (formData) => dispatch(setAppointment(formData)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AssignAppointment)
);
