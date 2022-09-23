import React from "react"
import "./Header.css"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import logo from "../../assets/img/logo.png"
import userIcon from "../../assets/img/user-icon.png"
import { Container, Row } from "reactstrap"

const nav_links = [
  {
    path: 'home', display: 'Home'
  },
  {
    path: 'shop', display: 'Shop'
  },
  {
    path: 'cart', display: 'Cart'
  }
]
const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="" />
            <div>
              <h1>G10Store</h1>
            </div>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="nav_item" key={index}>
                  <NavLink
                    to={item.path}
                    style={{ textDecoration: 'none' }}
                    className={(navClass) => navClass.isActive ? "nav_active" : ""}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*icon */}
          <div className="nav_icons">
            <span className="fav_icon">
              <i class="ri-heart-line"></i>
              <span className="badges">1</span>
            </span>
            <span className="cart_icon">
              <i class="ri-shopping-bag-line"></i>
              <span className="badges">1</span>

            </span>
            <span>
              <motion.img whileTap={{ scale: 1.1 }} src={userIcon} alt="" />
            </span>
          </div>

          <div className="mobile_menu">
            <span><i class="ri-menu-line"></i></span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header