import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import './Checkout.css';
import { useSelector } from 'react-redux';


const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg={8}>
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="number" placeholder='Phone' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Street Address' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg={4}>
              <div className="checkout__cart">
                <h6>Total Quantity: <span>{totalQty}</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>Shipping: <span>${totalAmount * 0.001}</span></h6>
                <h4>Total Cost: <span>${totalAmount * 0.001 + totalAmount}</span></h4>
                <button className="buy_btn auth_btn w-100">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default Checkout