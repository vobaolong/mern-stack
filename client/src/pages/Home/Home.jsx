import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'
import heroImg from '../../assets/img/product01.png'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import ProductList from '../../UI/ProductList'
import Services from '../../services/Services'
import productData from '../../assets/data/productData'
import counter from '../../assets/img/timer_count.png'
import Clock from '../../UI/Clock'
const Home = () => {
  const [trending, setTrending] = useState([])
  const [bestSaler, setBestSaler] = useState([])
  const [arrivals, setArrivals] = useState([])
  const [headphone, setHeadphone] = useState([])
  const [popular, setPopular] = useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendingProducts = productData.filter(item => item.category === 'Mouse');
    const filterBestSalerProducts = productData.filter(item => item.category === 'Laptop');
    const filterArrivalProducts = productData.filter(item => item.category === 'HDD');
    const filterHeadphoneProducts = productData.filter(item => item.category === 'Headphone');
    const filterPopularProducts = productData.filter(item => item.category === 'Popular');

    setTrending(filterTrendingProducts)
    setBestSaler(filterBestSalerProducts);
    setArrivals(filterArrivalProducts);
    setHeadphone(filterHeadphoneProducts);
    setPopular(filterPopularProducts);
  }, [])

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subTitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis totam maxime dolorem. Deleniti facilis ipsam dolor ipsum nesciunt veniam ut aliquid excepturi sapiente commodi, omnis, itaque quod autem modi!</p>
                <button
                  className="buy_btn"><Link to='/shop' style={{ textDecoration: 'none', color: 'unset' }}>SHOP NOW</Link></button>

              </div>
            </Col>

            <Col lg='6' md='6'>
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center' >
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trending} />
          </Row>
        </Container>
      </section>

      <section className='best_saler'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">Best Saler</h2>
            </Col>
            <ProductList data={bestSaler} />
          </Row>
        </Container>
      </section>

      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Laptop</h3>
              </div>
              <Clock />
              <button className="buy_btn store_btn">
                <Link to='/shop' style={{ textDecoration: 'none', color: 'unset' }}>Visit Store</Link>
              </button>
            </Col>

            <Col lg='6' md='6' className='text-end'>
              <img src={counter} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={arrivals} />
            <ProductList data={headphone} />
          </Row>
        </Container>
      </section>

      <section className='popular'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">Popular Product</h2>
            </Col>
            <ProductList data={popular} />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home