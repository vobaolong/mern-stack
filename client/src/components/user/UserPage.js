import React from "react";
import Login from "./Login";
import Register from "./Register";
const UserPage = () => {
  return (
    <section
      className="login-section pt-100 pb-100"
      style={{ marginTop: "100px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <ul
              className="nav nav-pills mb-40 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item mb-3 mx-2" role="presentation">
                <button
                  className="nav-link active md-nav-btn"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Register
                </button>
              </li>
              <li className="nav-item mb-3 mx-2" role="presentation">
                <button
                  className="nav-link md-nav-btn"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Login
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="form-wrap box--shadow">
                  <Register />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="form-wrap box--shadow">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
