import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

import MetaData from "../layout/MetaData";

const ListOrders = () => {
  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Num of Items",
          field: "numOfItems",
          sort: "asc",
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    data.rows.push({
      id: 1,
      numOfItems: 2,
      amount: "$100",
      status: true ? (
        <p style={{ color: "green" }}>PAID</p>
      ) : (
        <p style={{ color: "red" }}>NOT PAID</p>
      ),
      actions: (
        <Link to={"/order/1"} className="btn btn-primary">
          <i className="fa fa-eye"></i>
        </Link>
      ),
    });
    return data;
  };

  return (
    <div className="container">
      <MetaData title={"My Orders"} />
      <h1 className="my-5 text-center">
        <b>My Orders</b>
      </h1>
      <MDBDataTable
        data={setOrders()}
        className="px-3 "
        bordered
        striped
        hover
      />
    </div>
  );
};

export default ListOrders;
