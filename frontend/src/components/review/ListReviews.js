import React from "react";
import { Link } from "react-router-dom";

const ListReviews = ({ reviews }) => {
  return (
    <section className="prod-description pt-100 pb-100 ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="eg-title1 eg-title2 mb-50">Product Reviews</h3>
            <div className="row g-4">
              <div className="col-lg-3">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab2"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active btn--lg mb-20 shadow-lg"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    style={{ border: "none" }}
                  >
                    Reviews ({reviews.length})
                  </button>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tab-content" id="v-pills-tabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <ul className="comment-area mb-50">
                      {reviews &&
                        reviews.map((review) => (
                          <li
                            className="mb-30 shadow-lg"
                            style={{ borderRadius: "20px" }}
                            key={review._id}
                          >
                            <div className="comment-box">
                              <div className="comment-header d-flex justify-content-start align-items-center mb-30">
                                <div className="header-meta">
                                  <h5>
                                    {review.name}
                                    <span className="commnt-date">
                                      {" "}
                                      - 8th Jan 2021
                                    </span>
                                  </h5>
                                  <div class="rating-outer">
                                    <div
                                      class="rating-inner"
                                      style={{
                                        width: `${(review.rating / 5) * 100}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-body mb-30">
                                <p className="para">{review.comment}</p>
                              </div>
                              <div className="comment-footer">
                                <ul className="footer-icon-list d-flex justify-content-start align-items-center">
                                  <li>
                                    <Link to="/">
                                      <i className="fa fa-thumbs-up"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/">
                                      <i className="fa fa-heart"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListReviews;
