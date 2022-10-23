import React, { useState } from 'react';
import Helmet from '../../components/Helmet/Helmet';
import './Login.css';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


const Signup = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return <Helmet title='SignUp'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className="fw-bold mb-4">Sign Up</h3>
            <Form className='auth_form'>

              {/* Input Username */}
              <FormGroup className='form_group'>
                <input type="text" placeholder='Enter your username *' required
                  value={userName} onChange={e => setUserName(e.target.value)} />
              </FormGroup>
              {/* Input Email */}
              <FormGroup className='form_group'>
                <input type="email" placeholder='Enter your email *' required
                  value={email} onChange={e => setEmail(e.target.value)} />
              </FormGroup>
              {/* Input Password */}
              <FormGroup className='form_group'>
                <input type={passwordShown ? "text" : "password"}
                  placeholder='Enter your password *' required
                  value={password} onChange={e => setPassword(e.target.value)} />
                <i
                  onClick={togglePasswordVisiblity}
                  className={passwordShown ? "ri-eye-fill" : "ri-eye-off-fill"}
                >
                </i>
              </FormGroup>
              <button type='submit' className="buy_btn auth_btn">SignUp</button>
              <p>Already have an account !{" "} <Link to='/login'>Login Now</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup
