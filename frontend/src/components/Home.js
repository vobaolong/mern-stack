import React, { Fragment, useState } from "react";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import { products, category } from "../assets/data";
import Banner from "./layout/Banner";
import { useLocation } from "react-router-dom";
import CategorySection from "./layout/CategorySection";
import Features from "./layout/Features";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 10000]);
  const [catagory, setCatagory] = useState("");
  const [rating, setRating] = useState(0);
  const location = useLocation();

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = 10;
  let ishome = false;
  if (location.pathname === "/") {
    ishome = true;
  }

  return (
    <Fragment>
      <MetaData title={"Buy Best Products Online"} />
      {ishome && (
        <Banner
          src="https://res.cloudinary.com/hba-solver/image/upload/v1657880938/banner/bg1_jszeky.png"
          search="true"
          text="Enjoy Your Shopping With The Best Quality"
          text2="Get your products delivered at your shopsteps all day everyday"
        />
      )}
      {ishome && <CategorySection />}
      {ishome ? (
        <div class="col-lg-12 mt-5">
          <div class="section-head-style-one">
            <h2>Best Deals This Week!</h2>
            <p>A virtual assistant collects the product from your list</p>
          </div>
        </div>
      ) : (
        <>
          {
            <Banner
              src="https://res.cloudinary.com/hba-solver/image/upload/v1657882267/banner/bg2_a9w4ja.png"
              search="false"
              text="Search Items"
            />
          }
          <div class="col-lg-12 mt-5">
            <div class="section-head-style-one">
              <h2>Product List</h2>
            </div>
          </div>
        </>
      )}

      <section id="products" className="container mt-5">
        <div className="row">
          <Fragment>
            <div className="col-6 col-md-3 mt-5 mb-5">
              <div className="px-5">
                <Range
                  marks={{
                    1: `$1`,
                    10000: `$10000`,
                  }}
                  min={1}
                  max={10000}
                  defaultValue={[1, 10000]}
                  tipFormatter={(value) => `$${value}`}
                  tipProps={{
                    placement: "top",
                    visible: true,
                  }}
                  value={price}
                  onChange={(price) => setPrice(price)}
                />

                <hr className="my-5" />

                <div className="mt-5">
                  <h4 className="mb-3">Categories</h4>

                  <ul className="pl-0">
                    {category.map((category) => (
                      <li
                        style={{
                          cursor: "pointer",
                          listStyleType: "none",
                        }}
                        key={category._id}
                        onClick={() => setCatagory(category.name)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-3" />

                <div className="mt-5">
                  <h4 className="mb-3">Ratings</h4>

                  <ul className="pl-0">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <li
                        style={{
                          cursor: "pointer",
                          listStyleType: "none",
                        }}
                        key={star}
                        onClick={() => setRating(star)}
                      >
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{
                              width: `${star * 20}%`,
                            }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-9">
              <div className="row">
                {products.map((product) => (
                  <Product key={product._id} product={product} col={4} />
                ))}
              </div>
            </div>
          </Fragment>
          {/* <>
            {products.map((product) => (
              <Product key={product._id} product={product} col={3} />
            ))}
          </> */}
        </div>
      </section>

      {1 <= count && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={1}
            totalItemsCount={8}
            onChange={setCurrentPageNo}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
            activeLinkClass="bg-f96822"
          />
        </div>
      )}
      <Features />
    </Fragment>
  );
};

export default Home;
