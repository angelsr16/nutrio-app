import React from "react";

const WeekDiet = ({ headerTitle, diet}) => {
  return (
    <div className="weekDiet">
      <div className="weekDiet-header">{headerTitle}</div>
      <div className="weekDiet-body">
        <textarea readOnly={true} value={diet.lunes}></textarea>
        <textarea readOnly={true} value={diet.martes}></textarea>
        <textarea readOnly={true} value={diet.miercoles}></textarea>
        <textarea readOnly={true} value={diet.jueves}></textarea>
        <textarea readOnly={true} value={diet.viernes}></textarea>
        <textarea readOnly={true} value={diet.general}></textarea>
      </div>
    </div>
  );
};

export default WeekDiet;
