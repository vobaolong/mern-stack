import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { category } from "../../assets/data";
import "../../App.css";

const Header = () => {
  return (
    <Fragment>
      <header
        className="header-1 shadow-lg fixed-top mb-5"
        style={{ backgroundColor: "#e3e1e1", padding: "0" }}
      >
        <div className="container-fluid">
          <div
            className="row"
            style={{ justifyContent: "space-between !important" }}
          >
            <div className=" col-lg-5 col-md-5 col-sm-2 col-8 d-flex align-items-center">
              <nav className="main-nav d-none d-lg-block">
                <ul className="d-flex align-items-center">
                  <li className="menu-item">
                    <Link to="/" className="menu-link">
                      Hamza
                    </Link>
                  </li>
                  <li>
                    <ul className="d-flex">
                      <li>
                        <nav className="main-nav d-none d-lg-block">
                          <ul className="d-flex align-items-center">
                            <li className="menu-item">
                              <Link to="" className="menu-link ">
                                Categories
                              </Link>
                              <ul className="submenu-home1">
                                {category.map((category) => (
                                  <li>
                                    <Link to={`/search/${category}`}>
                                      {category}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact" className="menu-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className="main-nav d-block d-lg-none">
                <ul className="d-flex align-items-center">
                  <li className="menu-item">
                    <Link to="/login">
                      <i className="las la-user"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-4 ">
              <Link to="/" class="header-1-logo text-center  ">
                <img src="/images/header-1-logo.svg" alt="" />
              </Link>
            </div>
            <div className=" col-lg-5 col-md-5 col-sm-8 d-sm-block d-none">
              <div className="header-right-area d-flex justify-content-end align-items-center">
                <div className="header-1-icons">
                  <ul className="d-flex">
                    <li>
                      <Link to="/login">
                        <i className="fa fa-user mt-3"></i>
                      </Link>
                    </li>

                    <li>
                      <Link to="/cart" style={{ textDacoration: "none" }}>
                        <div className="cart-btn position-relative mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-minecart"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                          </svg>
                          <div className="cart-items-count">3</div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-1-contact d-flex align-items-center">
                  <div className="contact-num">
                    <span>Hot Line Number</span>
                    <p>+84 348073013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
