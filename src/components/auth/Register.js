import DatePicker from "react-datepicker";
import Button from "../layout/Button";
import { registerNewClient } from "../../actions/authActions";
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";
import { useState } from "react";
import { connect } from "react-redux";
import generator from "generate-password";
import {
  OnlyNumbers,
  ValidateForm,
} from "../../utils/ValidateForm";

const Register = ({ registerNewClient }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    goal: "Bajar de peso",
    gender: "Masculino",
    password: generator.generate({ length: 6, numbers: true }),
  });

  const handleChange = (flag, value, regex, e) => {
    if (regex) {
      if (value === "" || regex.test(value)) {
        setFormData({
          ...formData,
          [flag]: value,
        });
        return;
      }
    } else {
      switch (flag) {
        case "dateOfBirth":
          setFormData({
            ...formData,
            dateOfBirth: value,
          });
          break;
        default:
          setFormData({
            ...formData,
            [flag]: value,
          });
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ValidateForm(formData)) {
      registerNewClient(formData);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <h2>Registro</h2>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              required={true}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Sexo: </label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              name="gender"
            >
              <option defaultValue="Masculino">Masculino</option>
              <option defaultValue="Femenino">Femenino</option>
              <option defaultValue="Otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Número de telefono: </label>
            <input
              minLength={10}
              maxLength={10}
              type="text"
              onKeyPress={(event) => {
                OnlyNumbers(event);
              }}
              // pattern="[0-9]*"
              name="phoneNumber"
              onChange={(e) =>
                handleChange(e.target.name, e.target.value, /^[0-9\b]+$/, e)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Fecha de nacimiento: </label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              wrapperClassName="datepicker-input"
              selected={formData.dateOfBirth}
              onChange={(date) => handleChange("dateOfBirth", date)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Objetivo: </label>
            <select
              value={formData.genre}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              name="goal"
            >
              <option defaultValue="Bajar">Bajar de peso</option>
              <option defaultValue="Ganar">Ganar masa muscular</option>
            </select>
          </div>

          {/* <div className="form-group">
            <label htmlFor="status">Estatus pago: </label>
            <input
              type="text"
              name="status"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div> */}

          <Button
            text="Registrar cliente"
            fontSize={"18px"}
            type="submit"
            OnClick={handleSubmit}
          />
        </form>

        {formData.password !== "" && <h4>Password: {formData.password} </h4>}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerNewClient: (formData) => dispatch(registerNewClient(formData)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
