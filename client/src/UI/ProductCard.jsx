import React from 'react'
import './ProductCard.css'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
const ProductCard = ({ item }) => {
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
            whileTap={{ scale: 1.3 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>

      </div>
    </Col>
  )
}

export default ProductCard
