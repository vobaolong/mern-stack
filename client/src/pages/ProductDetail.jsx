import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import productData from '../assets/data/productData'
import Helmet from '../components/Helmet/Helmet'
import ProductList from '../UI/ProductList'
import CommonSection from '../UI/CommonSection'
import './ProductDetails.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetail = (item) => {


  const [tab, setTab] = useState('desc')
  const { id } = useParams()

  const [rating, setRating] = useState(null)
  const product = productData.find(item => item.id === id)
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.imgUrl
    }))
    toast.success('Thêm vào giỏ hàng thành công!')
  }

  const relatedProduct = productData.filter(item => item.category === category)
  return (
    <Helmet>
      <CommonSection />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img style={{ width: '80%' }} src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="product_detail">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-item-center gap-5">
                  <div>
                    <span onClick={() => setRating(1)}><i className="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(2)}><i className="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(3)}><i className="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(4)}><i className="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(5)}><i className="ri-star-half-s-fill"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span> ratings)</p>
                </div>
                <span className='product_price'>{`${price} VND`}</span>
                <p className='mt-3'>{shortDesc}</p>
                <button
                  onClick={addToCart}
                  className="buy_btn"
                >Thêm vào giỏ hàng
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab_wrapper d-flex align-item-center gap-5">
                <h6
                  className={`${tab === 'desc' ? 'active_tab' : ""}`}
                  onClick={() => setTab('desc')}>
                  Description
                </h6>
                <h6 className={`${tab === 'rev' ? 'active_tab' : ""}`}
                  onClick={() => setTab('rev')}>
                  Review ({reviews.length})
                </h6>
              </div>
              {
                tab === 'desc' ? <div className="tab_content">
                  <p>{description}</p>
                </div> : (
                  <div className='product_review mt-5'>
                    <div className='review_wrapper'>
                      <ul>
                        {
                          reviews?.map((item, index) => (
                            <li key={index} className='mb-4' >
                              <h6>Bảo Long</h6>
                              <span>{item.rating}( rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>
                      <div className="review_form">
                        <h4>Gửi cảm nhận của bạn về sản phẩm</h4>
                        <form action="">
                          <div className="form_group">
                            <input type="text" placeholder='Nhập tên của bạn' />
                          </div>
                          <div className="form_group d-flex align-item-center gap-5">
                            <span>1<i className="ri-star-s-fill"></i></span>
                            <span>2<i className="ri-star-s-fill"></i></span>
                            <span>3<i className="ri-star-s-fill"></i></span>
                            <span>4<i className="ri-star-s-fill"></i></span>
                            <span>5<i className="ri-star-s-fill"></i></span>
                          </div>
                          <div className="form_group">
                            <textarea type="text" placeholder='Viết nhận xét của bạn' />
                          </div>
                          <button type='submit' className="buy_btn">Gửi</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              }
            </Col>

            <Col lg='12'>
              <h2 className="related_title mt-5">Xem các sản phẩm cùng loại</h2>
            </Col>
            <ProductList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet >)
}

export default ProductDetail
