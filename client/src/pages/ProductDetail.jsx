import React, { useEffect, useRef, useState } from 'react'
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
import { motion } from "framer-motion"

const ProductDetail = (item) => {

  const [tab, setTab] = useState('desc')
  const { id } = useParams()
  const [rating, setRating] = useState(null)
  const product = productData.find(item => item.id === id)
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product
  const dispatch = useDispatch()
  const reviewUser = useRef("")
  const reviewMsg = useRef("")


  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.imgUrl
    }))
    toast.success('Thêm vào giỏ hàng thành công!')
  };
  useEffect(() => {
    window.scrollTo(0, 155)
  }, [product])

  const relatedProduct = productData.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()
    // const reviewUserName = reviewUser.current.value;
    // const reviewUserMsg = reviewMsg.current.value;

    // const reviewObj = {
    //   author: reviewUserName,
    //   text: reviewUserMsg,
    //   rating
    // };
    toast.success('Reivew submitted')
  }

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img style={{ width: '70%', marginTop: '40px' }} src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="product_detail">
                <h2>{productName}</h2>
                <p>(<span>{avgRating}</span> ratings)</p>
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
                            <input type="text" placeholder='Nhập tên của bạn' ref={reviewUser} required />
                          </div>
                          <div className="form_group d-flex align-item-center gap-5 rating__group">
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>
                          </div>
                          <div className="form_group">
                            <textarea row={4} type="text" placeholder='Viết nhận xét của bạn' ref={reviewMsg} required />
                          </div>
                          <motion.button onClick={submitHandler} whileTap={{ scale: 1.2 }} type='submit' className="buy_btn">Gửi</motion.button>
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
