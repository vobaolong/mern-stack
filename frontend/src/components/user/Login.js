import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import MetaData from "../layout/MetaData";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <MetaData title={"Login"} />

      <h3 className="title-30 text-center mb-35">Login Your Account</h3>
      <form className="login-form" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="email_field">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="fname"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner hidden-icon">
              <label htmlFor="email_password">Passwords</label>
              <input
                type="password"
                name="name"
                placeholder="abcdef*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner d-flex justify-content-between">
              <label></label>
              <Link to="/password/forgot" className="forget-password">
                Forgotten password?
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <button
                className="primary--btn login-btn"
                type="submit"
                style={{ border: "none", background: "none" }}
              >
                <Link to="" className="primary--btn login-btn text-uppercase">
                  login ACCOUNT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
