import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import './Login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
const Signup = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)

  return <Helmet title='SignUp'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className="fw-bold mb-4">Đăng ký</h3>
            <Form className='auth_form'>

              {/* Input Username */}
              <FormGroup className='form_group'>
                <input type="text" placeholder='Nhập tên người dùng của bạn'
                  value={userName} onChange={e => setUserName(e.target.value)} />
              </FormGroup>
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

              {/* Input Password */}
              <FormGroup className='form_group'>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={e => setFile(e.target.files[0])}
                />
              </FormGroup>
              <button type='submit' className="buy_btn auth_btn">Đăng ký</button>
              <p>Đã có tài khoản?{" "} <Link to='/login' style={{ textDecoration: 'none', color: 'unset' }}>Đăng nhập ngay!</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup
