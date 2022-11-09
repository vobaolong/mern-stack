import React, { Fragment } from "react";
import { MDBDataTable } from "mdbreact";
import { category } from "../../assets/data";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

const CategorysList = () => {
  const setCategorys = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Action",
          field: "actions",
        },
      ],
      rows: [],
    };

    category.forEach((category) => {
      data.rows.push({
        name: category,
        actions: (
          <Fragment>
            <button className="btn btn-danger py-1 px-2 ml-2">
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  return (
    <Fragment>
      <MetaData title={"All Category"} />
      <div className="row mt-5">
        <div className="col-12 col-md-2 mt-4">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10 mt-5">
          <Fragment>
            <h1 className="my-5">All Categorys</h1>
            <MDBDataTable
              data={setCategorys()}
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

export default CategorysList;
