import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import './Login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return <Helmet title='Login'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className="fw-bold mb-4">Đăng nhập</h3>
            <Form className='auth_form'>



              {/* Input Email */}
              <FormGroup className='form_group'>
                <input type="email" placeholder='Nhập email của bạn'
                  value={email} onChange={e => setEmail(e.target.value)} />
              </FormGroup>

              {/* Input Password */}
              <FormGroup className='form_group'>
                <input type="password" placeholder='Nhập mật khẩu của bạn'
                  value={password} onChange={e => setPassword(e.target.value)} />
              </FormGroup>
              <button type='submit' className="buy_btn auth_btn">Đăng nhập</button>
              <p>Không có tài khoản?{" "} <Link to='/signup' style={{ textDecoration: 'none', color: 'unset' }}>Đăng ký ngay!</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login
