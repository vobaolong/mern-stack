import React, { useRef, useEffect } from "react"
import "./Header.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { Container, Row } from "reactstrap"
import { useSelector } from "react-redux";

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
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
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
  const navigate = useNavigate()
  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1><Link to='/'>G10Store</Link></h1>
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
              <div className='nav__login'>
                <Link to='/login'>Login</Link> </div>
              <div className='nav__signup'>
                <Link to='/signup'>Register</Link>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
              </div>
              <span className="cart_icon" onClick={navigateToCart}
                title="Cart">
                <i className="ri-shopping-bag-line"></i>
                <span className="badges">{totalQuantity}</span>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header >
  )
}

export default Header