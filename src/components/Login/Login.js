import React from "react";
import useFirebase from "../../Hook/useFirebase";
import google from '../../images/google.png';
import "./Login.css";

const Login = () => {
  const { handleGoogleLogin } = useFirebase();

  return (
    <div className="d-flex align-items-center justify-content-center login-section login-box">

      <div className="front-bg px-5 d-flex align-items-center justify-content-center mt-3">
        <div>
          <h2>Refresh yourself with US</h2>
          <h3 className="mb-5">Please Register / Login</h3>
          <button
            className="btn btn-success mb-5 px-md-5"
            onClick={handleGoogleLogin}
          >
            <img width="30" src={google} alt="..." />&emsp;Google Login
          </button>
        </div>
      </div>

    </div>
  );
};

export default Login;
