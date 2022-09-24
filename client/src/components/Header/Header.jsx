import React, { useRef, useEffect } from "react"
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

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  //Get the button

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky');
      } else {
        headerRef.current.classList.remove('sticky');
      }
    })
  }
  useEffect(() => {
    stickyHeader()
    return () => window.addEventListener('scroll', stickyHeader)
  })

  const menuToggle = () => menuRef.current.classList.toggle('menu_active')
  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="" />
            <div>
              <h1>G10Store</h1>
            </div>
          </div>
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="nav_item" key={index}>
                  <NavLink
                    title={`Go to ${item.display}`}
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
            <span className="cart_icon"
              title="Cart">
              <i class="ri-shopping-bag-line"></i>
              <span className="badges">1</span>

            </span>
            <span>
              <motion.img title="Profile"
                whileTap={{ scale: 1.1 }} src={userIcon} alt="" />

            </span>
            <div className="mobile_menu">
              <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>

          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header