import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

const UsersList = () => {
  const setUsers = () => {
    const data = {
      columns: [
        {
          label: "User ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "Role",
          field: "role",
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
      id: "#1",
      name: "Bao Long",
      email: "19110234",
      role: "1",

      actions: (
        <Fragment>
          <Link to={"/admin/user/#1"} className="btn btn-primary py-1 px-2">
            <i className="fa fa-pencil"></i>
          </Link>
          <button className="btn btn-danger py-1 px-2 ml-2">
            <i className="fa fa-trash"></i>
          </button>
        </Fragment>
      ),
    });

    return data;
  };

  return (
    <Fragment>
      <MetaData title={"All Users"} />
      <div className="row mt-5">
        <div className="col-12 col-md-2 mt-4">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10 mt-5">
          <Fragment>
            <h1 className="my-5">All Users</h1>
            <MDBDataTable
              data={setUsers()}
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

export default UsersList;
