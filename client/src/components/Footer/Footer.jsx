import React from 'react';
import './Footer.css';
import logo from "../../assets/img/logo.png";
import ScrollToTop from 'react-scroll-to-top';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from 'react-router-dom'
const Footer = () => {

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1 className='text-white'>G10Store</h1>
              </div>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor porro dolorem rerum facilis debitis explicabo libero, aspernatur beatae ex ratione! Accusantium dicta iure accusamus doloremque odio laudantium officia animi totam!</p>


          </Col>
          <Col lg='3'>
            <div className="footer_links">
              <h4 className="links_title">Technology</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  MONGODB
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  EXPRESSJS
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  NODEJS
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  REACTJS
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  REDUX TOOLKIT
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className="footer_links">
              <h4 className="links_title">Liên kết nhanh</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop' style={{ textDecoration: 'none', color: 'unset' }}>Cửa hàng</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart' style={{ textDecoration: 'none', color: 'unset' }}>Giỏ hàng</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login' style={{ textDecoration: 'none', color: 'unset' }}>Đăng nhập</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className="footer_links">
              <h4 className="links_title">Liên hệ</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-fill"></i></span>
                  <p>1st Vo Van Ngan, Ho Chi Minh city</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-fill"></i></span>
                  <p>0331616496</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-fill"></i></span>
                  <p>19110@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer_copyright text-center">
              Copyright &copy; 2022 by G10Store. All Rights Reserved
            </p>
          </Col>

        </Row>
        <ScrollToTop
          smooths='true'
          color="#116149"
          className='ScrollToTop'
        />
      </Container>
    </footer>
  )
}

export default Footer