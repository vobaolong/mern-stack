import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import './Login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { login } from '../redux/CallApi'
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return <Helmet title='Login'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className="fw-bold mb-4">Login</h3>
            <Form className='auth_form'>

              {/* Input Username */}
              <FormGroup className='form_group'>
                <input
                  type="text"
                  placeholder='Enter your username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>

              {/* Input Password */}
              <FormGroup className='form_group'>
                <input type="password" placeholder='Enter your password'
                  value={password} onChange={e => setPassword(e.target.value)} />
              </FormGroup>
              <button
                type='submit'
                disabled={isFetching}
                onClick={handleClick}
                className="buy_btn auth_btn"
              >
                Login
              </button>
              <p>Don't have an account?{" "}
                <Link to='/signup'>SignUp Now</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login
