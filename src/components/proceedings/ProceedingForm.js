import React from "react";
import { OnlyFloatNumbers } from "../../utils/ValidateForm";

const ProceedingForm = ({ handleChange }) => {
  return (
    <>
      <div className="proceedingRegister-form-grid">
        <div className="form-group a-grid">
          <label name="peso">Peso:</label>
          <input
            name="peso"
            type="text"
            onChange={handleChange}
            onKeyPress={(event) => {
              OnlyFloatNumbers(event);
            }}
            maxLength={3}
          />
        </div>
        <div className="form-group b-grid">
          <label name="grasa">Porcentaje de grasa:</label>
          <input
            name="grasa"
            type="text"
            onChange={handleChange}
            onKeyPress={(event) => {
              OnlyFloatNumbers(event);
            }}
            maxLength={3}
          />
        </div>
        <div className="form-group c-grid">
          <label name="agua">Porcentaja de agua:</label>
          <input
            name="agua"
            type="text"
            onChange={handleChange}
            onKeyPress={(event) => {
              OnlyFloatNumbers(event);
            }}
            maxLength={3}
          />
        </div>
        <div className="form-group d-grid">
          <label name="muscular">Masa muscular:</label>
          <input
            name="muscular"
            type="text"
            onChange={handleChange}
            onKeyPress={(event) => {
              OnlyFloatNumbers(event);
            }}
            maxLength={3}
          />
        </div>
        <div className="form-group e-grid">
          <label name="visceral">Grasa visceral:</label>
          <input
            name="visceral"
            type="text"
            onChange={handleChange}
            onKeyPress={(event) => {
              OnlyFloatNumbers(event);
            }}
            maxLength={3}
          />
        </div>
        <div className="form-group f-grid">
          <label name="observaciones">Observaciones:</label>
          <textarea name="observaciones" type="text" onChange={handleChange} />
        </div>
        <div className="form-group g-grid">
          <label name="recomendaciones">Recomendaciones:</label>
          <textarea
            name="recomendaciones"
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProceedingForm;
