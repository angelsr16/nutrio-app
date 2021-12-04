import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../../utils/withRouter";
import ProceedingInfo from "../layout/ProceedingInfo";
import "./Records.css";

const Records = ({ userProgress, users }) => {
  const renderRecord = () => {
    if (userProgress) {
      if (users) {
        const currentUser = users[userProgress.clientId];
        if (currentUser) {
          return (
            <>
              <h2>
                Expediente (
                {new Date(userProgress.createdAt).toLocaleDateString()})
              </h2>
              <div className="proceedingInfo">
                <ProceedingInfo title="Nombre: " content={currentUser.name} />
                <ProceedingInfo
                  title="Peso: "
                  content={userProgress.peso + " kg"}
                />
                <ProceedingInfo
                  title="Porcentaje de agua: "
                  content={userProgress.agua + "%"}
                />
                <ProceedingInfo
                  title="Masa muscular: "
                  content={userProgress.muscular + "%"}
                />
                <ProceedingInfo
                  title="Grasa visceral: "
                  content={userProgress.grasa + " kg"}
                />
                <ProceedingInfo
                  title="Observaciones: "
                  content={userProgress.observaciones}
                />
                <ProceedingInfo
                  title="Recomendaciones: "
                  content={userProgress.recomendaciones}
                />
              </div>
            </>
          );
        }
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="madeAppointments-container">{renderRecord()}</div>
      </div>
      {/* {user && userProgress ? (
        <>
          <h2>
            Expediente ({new Date(userProgress.createdAt).toLocaleDateString()})
          </h2>
          <div className="proceedingInfo">
            <ProceedingInfo title="Nombre: " content={user.name} />
            <ProceedingInfo
              title="Peso: "
              content={userProgress.peso + " kg"}
            />
            <ProceedingInfo
              title="Porcentaje de agua: "
              content={userProgress.agua + "%"}
            />
            <ProceedingInfo
              title="Masa muscular: "
              content={userProgress.muscular + "%"}
            />
            <ProceedingInfo
              title="Grasa visceral: "
              content={userProgress.grasa + " kg"}
            />
            <ProceedingInfo
              title="Observaciones: "
              content={userProgress.observaciones}
            />
            <ProceedingInfo
              title="Recomendaciones: "
              content={userProgress.recomendaciones}
            />
          </div>
        </>
      ) : (
        <p>No pudimos encontrar el expediente solicitado</p>
      )} */}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    userProgress:
      state.firestore.data.madeAppointments &&
      state.firestore.data.madeAppointments[props.params.id],
    users: state.firestore.data.users,
  };
};

export default withRouter(connect(mapStateToProps)(Records));
