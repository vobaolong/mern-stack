import React from "react";
import { Link } from "react-router-dom";
import "../../App1.css";
import { category } from "../../assets/data";
const CategorySection = () => {
  return (
    <div class="category-area-start category-style-one mt-100 position-relative">
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head-style-one">
              <h2>What do you looking for ?</h2>
              <p>We have variety of catagories available</p>
            </div>
          </div>
        </div>
        <div class="row">
          {category.map((category) => {
            return (
              <div
                class="col-lg-2 col-md-3 col-sm-6 category-box-alpha shadow-sm"
                style={{ borderRadius: "20px" }}
              >
                <div class="category-icon">
                  <Link to={`/search/${category.name}`}>
                    <img src={category} alt="" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
