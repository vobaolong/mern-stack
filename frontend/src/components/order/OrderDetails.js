import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import MetaData from "../layout/MetaData";
import { products } from "../../assets/data";
const OrderDetails = ({ match }) => {
  return (
    <Fragment>
      <MetaData title={"Order Details"} />
      <Fragment>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8 mt-5 order-details">
            <h1 className="my-5">Order # 1</h1>

            <h4 className="mb-4">Shipping Info</h4>
            <p>
              <b>Name:</b> Bao Long
            </p>
            <p>
              <b>Phone:</b> 0316166
            </p>
            <p className="mb-4">
              <b>Address:</b>
              shippingDetails
            </p>
            <p>
              <b>Amount:</b> $100
            </p>

            <hr />

            <h4 className="my-4">Payment</h4>
            <p className={true ? "greenColor" : "redColor"}>
              <b>{true ? "PAID" : "NOT PAID"}</b>
            </p>

            <h4 className="my-4">Order Status:</h4>
            <p>
              <b>Paid</b>
            </p>

            <h4 className="my-4">Order Items:</h4>

            <hr />
            <div className="cart-item my-1">
              <div className="row my-5">
                <div className="col-4 col-lg-2">
                  <img
                    src={products.image}
                    alt={products.name}
                    height="45"
                    width="65"
                  />
                </div>

                <div className="col-5 col-lg-5">
                  <Link to={`/products/${products}`}>{products.name}</Link>
                </div>

                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                  <p>${products.price}</p>
                </div>

                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                  <p>13 Piece(s)</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default OrderDetails;
