import React, { Fragment, useState } from "react";
import { Carousel } from "react-bootstrap";

import MetaData from "../layout/MetaData";
import ListReviews from "../review/ListReviews";
import { useSelector } from "react-redux";
import { products } from "../../assets/data";
import RelatedProducts from "./RelatedProducts";
import { Link } from "react-router-dom";

const ProductDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.auth);

  const increaseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber >= products.stock) return;

    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber <= 1) return;

    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  function setUserRatings() {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
      star.starValue = index + 1;

      ["click", "mouseover", "mouseout"].forEach((e) => {
        star.addEventListener(e, showRatings);
      });
    });

    const showRatings = (e) => {
      stars.forEach((star, index) => {
        if (e.type === "click") {
          if (index < this.starValue) {
            star.classList.add("orange");

            setRating(this.starValue);
          } else {
            star.classList.remove("orange");
          }
        }

        if (e.type === "mouseover") {
          if (index < this.starValue) {
            star.classList.add("yellow");
          } else {
            star.classList.remove("yellow");
          }
        }

        if (e.type === "mouseout") {
          star.classList.remove("yellow");
        }
      });
    };
  }

  const reviewHandler = () => {
    const formData = new FormData();

    formData.set("rating", rating);
    formData.set("comment", comment);
    formData.set("productId", match.params.id);
  };

  return (
    <Fragment>
      <MetaData title={products.name} />

      <section className="prod-details pt-100 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details-gallery">
                <div className="row g-3">
                  <div className="col-sm-9">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active "
                        id="v-pills-img1"
                        role="tabpanel"
                        aria-labelledby="v-pills-img1-tab"
                      >
                        <div
                          className="gallery-big-image shadow-lg"
                          style={{ border: "none" }}
                        >
                          <Carousel pause="hover">
                            {products.images &&
                              products.images.map((image) => (
                                <Carousel.Item key={image}>
                                  <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={products.title}
                                  />
                                </Carousel.Item>
                              ))}
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                <ul className="product-review2 d-flex flex-row align-items-center mb-25">
                  <div className="rating-outer">
                    <div
                      className="rating-inner"
                      style={{ width: `${(products.ratings / 5) * 100}%` }}
                    ></div>
                  </div>
                  <li>
                    <Link to="/" className="review-no"></Link> (
                    {products.numofReviews} Review)
                  </li>
                </ul>
                <h3 className="eg-title1 mb-25">{products.name}</h3>
                <h4 className="price-title border--bottom2 mb-15">
                  <span>PKR </span>
                  <span>{products.price}</span>
                </h4>
                <p className="para2 mb-15">{products.description}</p>
                <div className="prod-quantity d-flex align-items-center justify-content-start mb-20">
                  <div className="quantity">
                    <input
                      className="count p-1"
                      type="number"
                      value={quantity}
                      readOnly
                    />
                    <div className="d-flex" style={{ flexDirection: "column" }}>
                      <button
                        onClick={increaseQty}
                        style={{ border: "none", background: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="7"
                          fill="currentColor"
                          className="bi bi-chevron-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={decreaseQty}
                        style={{ border: "none", background: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="7"
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    disabled={products.stock === 0}
                    style={{ background: "none", border: "none" }}
                  >
                    <Link href="/" className="eg-btn md--btn primary--btn">
                      Add to cart
                    </Link>
                  </button>
                </div>
                <ul className="prod-info">
                  <li>
                    <span>Stock:</span>
                    <b
                      className={
                        products.stock ? "text-success" : "text-danger"
                      }
                    >
                      {products.stock ? products.stock : "Out of stock"}
                    </b>
                  </li>
                  <li>
                    <span>Category:</span>
                    {products.category}
                  </li>
                  <li>
                    {user ? (
                      <button
                        id="review_btn"
                        type="button"
                        className="btn btn-primary mt-4"
                        data-toggle="modal"
                        data-target="#ratingModal"
                        onClick={setUserRatings}
                      >
                        Submit Your Review
                      </button>
                    ) : (
                      <div className="alert alert-danger mt-5" type="alert">
                        Login to post your review.
                      </div>
                    )}
                  </li>
                </ul>
                <div className="row">
                  <div className="rating w-50">
                    <div
                      className="modal fade"
                      id="ratingModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="ratingModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="ratingModalLabel">
                              Submit Review
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul className="stars">
                              <li className="star">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>

                            <textarea
                              name="review"
                              id="review"
                              className="form-control mt-3"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></textarea>

                            <button
                              className="btn my-3 float-right review-btn px-4 text-white"
                              onClick={reviewHandler}
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts category={products.category} />

      {products.reviews && products.reviews.length > 0 && (
        <ListReviews reviews={products.reviews} />
      )}
    </Fragment>
  );
};

export default ProductDetails;
