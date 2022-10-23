import React from 'react'
import './ProductCard.css'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
const ProductCard = ({ item }) => {

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl
    }))
    toast.success('Thêm vào giỏ hàng thành công!')
  }
  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className="product_item">

        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>

        <div className='p-2 product_info'>
          <h3 className="product_name">
            <Link
              to={`/shop/${item.id}`}
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              {item.productName}
            </Link>
          </h3>
        </div>

        <span className='p-2'>{item.category}</span>

        <div className="product_card-bottom d-flex aligm-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span
            title="Add to cart"
            whileTap={{ scale: 1.3 }}
            onClick={addToCart}>
            <i className="ri-shopping-cart-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  )
}
export default ProductCard
