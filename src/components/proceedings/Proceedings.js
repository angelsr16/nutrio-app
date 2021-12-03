import { connect } from "react-redux";
import { withRouter } from "../../utils/withRouter";
import ProceedingInfo from "../layout/ProceedingInfo";
import "./Proceedings.css";

const Proceedings = ({ userProgress, currentUser }) => {
  return (
    <>
      {currentUser && userProgress ? (
        <>
          <h2>
            Expediente ({new Date(userProgress.createdAt).toLocaleDateString()})
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
      ) : (
        <p>No pudimos encontrar el expediente solicitado</p>
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    userProgress:
      state.firestore.data.userProgress &&
      state.firestore.data.userProgress[props.params.id],
  };
};

export default withRouter(connect(mapStateToProps)(Proceedings));
