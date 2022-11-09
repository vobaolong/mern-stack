import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import { products } from "../../assets/data";
const ProcessOrder = () => {
  const [status, setStatus] = useState("");

  const shippingDetails = "33, HoChiMinh,6000, VietNam";

  return (
    <Fragment>
      <MetaData title={`Process Order #Success`} />
      <div className="row mt-5">
        <div className="col-12 col-md-2 mt-4">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10 mt-5">
          <Fragment>
            <div className="row d-flex justify-content-around">
              <div className="col-12 col-lg-7 order-details">
                <h2 className="my-5">Order # 1</h2>

                <h4 className="mb-4">Shipping Info</h4>
                <p>
                  <b>Name:</b> bao long
                </p>
                <p>
                  <b>Phone:</b> 00226552655
                </p>
                <p className="mb-4">
                  <b>Address:</b>
                  {shippingDetails}
                </p>
                <p>
                  <b>Amount:</b> $1000
                </p>

                <hr />

                <h4 className="my-4">Payment</h4>
                <p className={true ? "greenColor" : "redColor"}>
                  <b>{true ? "PAID" : "NOT PAID"}</b>
                </p>

                <h4 className="my-4">Stripe ID</h4>
                <p>
                  <b>456782345445</b>
                </p>

                <h4 className="my-4">Order Status:</h4>
                <p className={true ? "greenColor" : "redColor"}>
                  <b>Paid</b>
                </p>

                <h4 className="my-4">Order Items:</h4>

                <hr />
                <div className="cart-item my-1">
                  <div key={products} className="row my-5">
                    <div className="col-4 col-lg-2">
                      <img
                        src={products.image}
                        alt={products.name}
                        height="45"
                        width="65"
                      />
                    </div>

                    <div className="col-5 col-lg-5">
                      <Link to="/products/1">{products.name}</Link>
                    </div>

                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                      <p>${products.price}</p>
                    </div>

                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                      <p>1 Piece(s)</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>

              <div className="col-12 col-lg-3 mt-5">
                <h4 className="my-4">Status</h4>

                <div className="form-group">
                  <select
                    className="form-control"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                <button className="btn btn-primary btn-block">
                  Update Status
                </button>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
