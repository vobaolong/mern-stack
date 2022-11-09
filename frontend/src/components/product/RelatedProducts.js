import React from "react";
import { products } from "../../assets/data";
import Product from "./Product";

const RelatedProducts = ({ category }) => {
  return (
    <>
      {category ? (
        <>
          <section className="related-product pb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="eg-title1 eg-title2 mb-50">Related Product</h3>
                </div>
              </div>
              <div className="row">
                {products.map((product) => {
                  if (product.category === category) {
                    return (
                      <>
                        <Product key={product.id} product={product} col={3} />
                      </>
                    );
                  }
                  return <></>;
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RelatedProducts;
