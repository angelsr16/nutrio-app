import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ClientList from "../clients/ClientList";
import ClientDashboard from "./client/ClientDashboard";
import "./Dashboard.css";

const Dashboard = ({ currentUser }) => {
  return (
    <div className="dashboard">
      {currentUser && currentUser.rol === "Nutriologo" ? (
        <div className="dashboard-nutriologo">
          <Link to="registro-usuario">Registrar nuevo cliente</Link>
          <ClientList />
        </div>
      ) : (
        currentUser && <ClientDashboard currentUser={currentUser} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser:
      state.firestore.data.users &&
      state.firestore.data.users[state.firebase.auth.uid],
  };
};

export default connect(mapStateToProps)(Dashboard);
