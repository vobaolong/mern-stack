import React, { Fragment, useEffect } from "react";
import Banner from "../components/home/Banner/Banner";
import OurProduct from "../components/home/OurProduct/OurProduct";
import companydata from "./../data/companydata.json";
import MetaData from "./../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors, getProduct } from "../actions/productAction";
import Loader from "../components/layout/Loader/Loader";
import { useAlert } from "react-alert";

const HomePage = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="G10Store" />

          {/* banner */}
          <Banner jsonData={companydata} />

          {/* our products */}
          <OurProduct products={products.slice(0, 8)} />
        </Fragment>
      )}
    </div>
  );
};

export default HomePage;
