import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./ClientDashboard.css";
import WeekDiet from "./WeekDiet";

const ClientDashboard = ({ currentUser, userDiet, userProgress }) => {
  const meals = ["desayuno", "colacion_m", "comida", "colacion_v", "cena"];

  const meals_names = [
    "Desayuno",
    "Colación matutina",
    "Comida",
    "Colación vespertina",
    "Cena",
  ];

  return (
    <div className="dashboard-cliente">
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
          },
          <p>Recomendaciones: Tomar agua 2 veces al día</p>
          
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.firebase.auth.uid);
  return {
    uid: state.firebase.auth.uid,
    userDiet: state.firestore.data.userDiet,
    userProgress: state.firestore.data.userProgress,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "users",
      doc: ownProps.uid ? ownProps.uid : "",
      subcollections: [{ collection: "diet", doc: "assignedDiet" }],
      storeAs: "userDiet",
    },
    {
      collection: "users",
      doc: ownProps.uid ? ownProps.uid : "",
      subcollections: [{ collection: "progress" }],
      storeAs: "userProgress",
    },
  ])
)(ClientDashboard);
