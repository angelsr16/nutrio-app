import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Route, Routes } from "react-router";
import { compose } from "redux";
import Proceedings from "../../proceedings/Proceedings";
import AssignedDiet from "./AssignedDiet";
import "./ClientDashboard.css";

const ClientDashboard = ({ currentUser, userDiet, userProgress }) => {
  

  return (
    <div className="dashboard-cliente">
      <Routes>
        <Route path="" element={<AssignedDiet />} />
        {/* Dashboard Cliente */}
        <Route path="/avances/:id" element={<Proceedings currentUser={currentUser}/>} />
      </Routes>
      
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
