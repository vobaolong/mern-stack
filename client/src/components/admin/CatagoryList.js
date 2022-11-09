import React, { Fragment, useEffect } from "react";
import { MDBDataTable } from "mdbreact";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  dltCategory,
  clearErrors,
} from "../../redux/actions/categoryActions";
import { DELETE_CATEGORY_RESET } from "../../redux/constants/categoryConstants";

const CategorysList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, category } = useSelector((state) => state.category);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.dltCategory
  );

  useEffect(() => {
    dispatch(getCategory());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Category deleted successfully");
      history.push("/admin/Category");
      dispatch({ type: DELETE_CATEGORY_RESET });
    }
  }, [dispatch, alert, error, deleteError, isDeleted, history]);

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
        id: category._id,
        name: category.name,
        actions: (
          <Fragment>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteCategoryHandler(category._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteCategoryHandler = (id) => {
    dispatch(dltCategory(id));
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

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setCategorys()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CategorysList;
