import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../../components/layout/Loader/Loader";
import ProductCard from "../../components/home/OurProduct/ProductCard";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { AiOutlineFrown } from "react-icons/ai";
import FilterSlide from "../../components/Products/FilterSlide";
import MetaData from "../../components/layout/MetaData";

const categories = [
  "Laptop",
  "PC",
  "Chuột",
  "Bàn phím",
  "Tai nghe",
  "SSD",
  "Case PC",
];

const Products = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, error, alert, keyword, currentPage, price, category, ratings]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Sản phẩm | G10Store`} />
          <div className="h-auto w-[100%] py-24 md:px-10 ">
            <h1 className="headingStyle">
              <div className="headingStylesDiv" />
              Sản phẩm
            </h1>

            <div className="flex flex-row-reverse justify-center">
              <div className="productsLayoutStyle">
                {products?.length > 0 ? (
                  products?.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                  })
                ) : (
                  <h1 className="items-center text-center text-xl flex uppercase text-red-600">
                    Không tìm thấy sản phẩm <AiOutlineFrown className="mx-1" />!
                  </h1>
                )}
              </div>
              <FilterSlide
                price={price}
                priceHandler={priceHandler}
                categories={categories}
                setCategory={setCategory}
                ratings={ratings}
                setRatings={setRatings}
              />
            </div>
          </div>
          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText=">"
                prevPageText="<"
                firstPageText="<<"
                lastPageText=">>"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
