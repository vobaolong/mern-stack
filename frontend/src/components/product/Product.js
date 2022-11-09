import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  return (
    <>
      <div class={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
        <div
          className="eg-product-carde-alpha shadow-lg "
          style={{ borderRadius: "20px" }}
        >
          <div className="eg-porduct-thumb">
            <Link to={`/product/${product._id}`}  >
              <img
                className="p-3"
                src={product.images[0].url}
                alt="Product Img"
                style={{ width: "100%" }}
              />
            </Link>
          </div>
          <div className="eg-porduct-body mt-2">
            <h5 className="eg-product-title">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </h5>
            <div className="eg-product-card-price">
              <ins>
                <span className="price-amount">
                  <bdi>PKR {product.price}</bdi>
                </span>
              </ins>
            </div>

            <div className="product-card-bottom">
              <ul className="product-rating">
                <div className="ratings mt-auto">
                  <div className="rating-outer">
                    <div
                      className="rating-inner"
                      style={{ width: `${(product.ratings / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span id="no_of_reviews">
                    ({product.numOfReviews} Reviews)
                  </span>
                </div>
              </ul>
              <div className="product-add-btn">
                <Link to={`/product/${product._id}`}>
                  View Details <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
