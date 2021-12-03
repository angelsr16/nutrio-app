import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<Home />} />
          {/* <Route exact path="/*" element={<Dashboard />} />

          {/* Dashboard Nutriologo }
          <Route path="/registro-usuario" element={<Register />} />
          <Route path="/citas" element={<AppointmentsList />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/asignar-cita/:id" element={<AssignAppointment />} />
          <Route path="/registro-avances/:id" element={<ProceedingRegister />} />

          {/* Dashboard Cliente }
          <Route path="/avances/:id" element={<Proceedings />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
