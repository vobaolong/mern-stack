import React from 'react'
import './Footer.css'
import logo from "../../assets/img/logo.png"

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from 'react-router-dom'
const Footer = () => {

  const mybutton = document.getElementById("myBtn");
  // Cách top 100px thì hiện 
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
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
            <p className="footer_text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum iusto sequi rerum asperiores numquam provident unde, laudantium officia. Eum aperiam quae modi rem a quam minus asperiores recusandae nihil!</p>

          </Col>
          <Col lg='3'>
            <div className="footer_links">
              <h4 className="links_title">Top loại sản phẩm</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 d-flex '>
                  <Link to='#trending' style={{ textDecoration: 'none', color: 'unset' }}>Xu hướng</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none', color: 'unset' }}>Bán chạy</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none', color: 'unset' }}>Sản phẩm mới</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none', color: 'unset' }}>Chất lượng</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none', color: 'unset' }}>Phổ biến</Link>
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

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none', color: 'unset' }}>Chính sách bảo mật</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className="footer_links">
              <h4 className="links_title">Liên hệ</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-fill"></i></span>
                  <p>1st Vo Van Ngan, Ho Chi Minh city</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  <p>0331616496</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-fill"></i></span>
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
          <Link
            to='/'
            id="myBtn"
            title='Go to top'
            style={{ textDecoration: 'none', color: 'unset' }}>
            <i class="ri-arrow-up-s-line"></i>
          </Link>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer