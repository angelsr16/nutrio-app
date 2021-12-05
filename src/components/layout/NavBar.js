import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import "./NavBar.css";

const NavBar = ({ currentUser, signOut }) => {
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <nav>
      <div className="nav-brand">
        <p>Nutrio app</p>
      </div>
      <div className="nav-links">
        <Link to="/" >{currentUser && currentUser.rol === "Nutriologo" ? "Clientes" : "Dieta"} </Link>
        <Link to="/citas">Citas</Link>
        {currentUser && currentUser.rol === "Nutriologo" && <Link to="/chat">Chat</Link>}
        <span>|</span>
        <Link to="#" onClick={handleSignOut}>
          Cerrar sesión
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser:
      state.firestore.data.users &&
      state.firestore.data.users[state.firebase.auth.uid],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
