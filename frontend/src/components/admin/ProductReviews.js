import React, { Fragment, useState } from "react";
import { MDBDataTable } from "mdbreact";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

const ProductReviews = () => {
  const [productId, setProductId] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const setReviews = () => {
    const data = {
      columns: [
        {
          label: "Review ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Rating",
          field: "rating",
          sort: "asc",
        },
        {
          label: "Comment",
          field: "comment",
          sort: "asc",
        },
        {
          label: "User",
          field: "user",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    data.rows.push({
      id: 1,
      rating: 3,
      comment: "good",
      user: "Long",

      actions: (
        <button className="btn btn-danger py-1 px-2 ml-2">
          <i className="fa fa-trash"></i>
        </button>
      ),
    });
    return data;
  };

  return (
    <Fragment>
      <MetaData title={"Product Reviews"} />
      <div className="row mt-5">
        <div className="col-12 col-md-2 mt-4">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10 mt-5">
          <Fragment>
            <div className="row justify-content-center mt-5">
              <div className="col-5">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label htmlFor="productId_field">Enter Product ID</label>
                    <input
                      type="text"
                      id="productId_field"
                      className="form-control"
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                    />
                  </div>

                  <button
                    id="search_button"
                    type="submit"
                    className="btn btn-primary btn-block py-2"
                  >
                    SEARCH
                  </button>
                </form>
              </div>
            </div>
            <MDBDataTable
              data={setReviews()}
              className="px-3"
              bordered
              striped
              hover
            />
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
