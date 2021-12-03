import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { signIn } from "../../actions/authActions";
import Button from "../layout/Button";
import Card from "../layout/Card";
import "./Login.css";

const Login = ({ uid, signIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signIn(formData);
  };

  return (
    <div>
      {uid && <Navigate to="/"/> }
      <div className="login">
        <div className="login-brand">
          <img className="img-brand" src="/images/brand.svg" alt="" />
          <h2>Nutrio App</h2>
        </div>
        <Card>
          <form className="login-form">
            <label className="login-label" htmlFor="">
              Email
            </label>
            <input type="email" name="email" onChange={handleChange} />
            <label className="login-label" htmlFor="">
              Password
            </label>
            <input type="password" name="password" onChange={handleChange} />
            <Button text="Login" type="submit" OnClick={handleSubmit} />
            <br></br>
          </form>

        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid);
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
