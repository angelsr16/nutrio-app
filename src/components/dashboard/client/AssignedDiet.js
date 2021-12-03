import React from "react";
import { connect } from "react-redux";
import WeekDiet from "./WeekDiet";

const AssignedDiet = ({ userDiet }) => {
  const meals = ["desayuno", "colacion_m", "comida", "colacion_v", "cena"];

  const meals_names = [
    "Desayuno",
    "Colación matutina",
    "Comida",
    "Colación vespertina",
    "Cena",
  ];
  return (
    <>
      <h2>Dieta asignada</h2>
      <div className="assignedDiet">
        <div className="assignedDiet-header">
          <p>L</p>
          <p>M</p>
          <p>M</p>
          <p>J</p>
          <p>V</p>
          <p>General</p>
        </div>

        {userDiet &&
          meals.map((meal, i) => {
            return (
              <WeekDiet
                key={meal}
                headerTitle={meals_names[i]}
                diet={userDiet[meal]}
              />
            );
          }, <p>Recomendaciones: Tomar agua 2 veces al día</p>)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
        userDiet: state.firestore.data.userDiet
    }
}

export default connect(mapStateToProps)(AssignedDiet);
