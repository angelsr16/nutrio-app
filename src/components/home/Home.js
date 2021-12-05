import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Route, Routes } from "react-router";
import { compose } from "redux";
import AppointmentsList from "../appointments/AppointmentsList";
import AssignAppointment from "../appointments/AssignAppointment";
import Register from "../auth/Register";
import Chat from "../chat/Chat";
import { Navigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NavBar from "../layout/NavBar";
import ProceedingRegister from "../proceedings/ProceedingRegister";
import Proceedings from "../proceedings/Proceedings";
import Records from "../proceedings/Records";

const Home = ({ uid }) => {
  return (
    <>
      {!uid && <Navigate to="/login" />}
      <NavBar />
      <Routes>
        <Route exact path="/*" element={<Dashboard />} />

        {/* Dashboard Nutriologo */}
        <Route path="/registro-usuario" element={<Register />} />
        <Route path="/citas" element={<AppointmentsList />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/asignar-cita/:id" element={<AssignAppointment />} />
        <Route path="/registro-avances/:id" element={<ProceedingRegister />} />
        <Route path="/expediente/:id" element={<Records  />} />

        {/* Dashboard Cliente */}
        {/* <Route path="/avances/:id" element={<Proceedings />} /> */}
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.firebase.auth.uid);
  return {
    uid: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "users",
    },
    {
      collection: "appointments",
      orderBy: ["appointmentDateInMillis", "asc"],
    },
    {
      collection: "appointmentDates",
    },
    {
      collection: "madeAppointments"
    }
    
  ])
)(Home);
