import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App1.css";
const CategorySection = () => {
  const { category } = useSelector((state) => state.category);
  return (
    <div className="category-area-start category-style-one mt-100 position-relative">
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head-style-one">
              <h2>What do you looking for ?</h2>
              <p>We have variety of catagories available</p>
            </div>
          </div>
        </div>
        <div className="row">
          {category?.map((category, idx) => {
            return (
              <div
                className="col-lg-2 col-md-3 col-sm-6 category-box-alpha shadow-sm"
                style={{ borderRadius: "20px" }}
              >
                <div className="category-icon">
                  <Link to={`/search/${category.name}`}>
                    <img src={category.images[0].url} alt="" />
                  </Link>
                </div>
                <h5 className="category-title">
                  <Link to={`/search/${category.name}`}>{category.name}</Link>
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
