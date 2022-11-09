import React from "react";
import { Route } from "react-router-dom";
import Search from "./Search";

const Banner = ({ src, search, text, text2 }) => {
  return (
    <div>
      <div class="hero-area hero-style-one">
        <div
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            inset: " 0",
            zIndex: "-1",
          }}
        ></div>
        <div class="container">
          <div class="hero-content-wrap">
            <h2>{text}</h2>
            <p>{text2}</p>
            {search === "true" ? (
              <Route render={({ history }) => <Search history={history} />} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
