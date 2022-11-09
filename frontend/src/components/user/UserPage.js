import React from "react";
import Login from "./Login";
import Register from "./Register";
const UserPage = () => {
  return (
    <section class="login-section pt-100 pb-100" style={{ marginTop: "100px" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <ul
              class="nav nav-pills mb-40 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item mb-3 mx-2" role="presentation">
                <button
                  class="nav-link active md-nav-btn"
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
              <li class="nav-item mb-3 mx-2" role="presentation">
                <button
                  class="nav-link md-nav-btn"
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
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="form-wrap box--shadow">
                  <Register />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="form-wrap box--shadow">
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
