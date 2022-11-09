import React, { Fragment } from "react";

import MetaData from "../layout/MetaData";

const Cart = () => {
  return (
    <Fragment>
      <MetaData title={"Your Cart"} />
      <h2 style={{ marginTop: "200px" }}>Your Cart is Empty</h2>
    </Fragment>
  );
};

export default Cart;
