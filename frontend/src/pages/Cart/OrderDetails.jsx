import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../../components/layout/Loader/Loader";
import { useAlert } from "react-alert";
import { dolaSymbol } from "../../constants/constants";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const alert = useAlert();
  const params = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(params.id));
  }, [alert, dispatch, error, params.id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Chi tiết đơn hàng`} />

          <div className="h-auto py-24">
            <div className="w-[90%] mx-auto">
              <div>
                <p className="heading">Thông tin giao hàng</p>
              </div>
              <div className="headingData">
                <div className="flex gap-3 ">
                  <p>Tên: </p>
                  <span className="text-slate-600">
                    {order.user && order.shippingInfo.fullname}
                  </span>
                </div>
                <div className="flex gap-3 ">
                  <p>SĐT: </p>
                  <span className="text-slate-600">
                    {order.user && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div className="flex gap-3 ">
                  <p>Địa chỉ: </p>
                  <span className="text-slate-600">
                    {order.user &&
                      `${order.shippingInfo.fullname} - ${order.shippingInfo.address}, ${order.shippingInfo.city} `}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="heading">Chi tiết thanh toán</p>
                <div className="headingData">
                  <div className="flex gap-3">
                    <p>Thanh toán: </p>
                    <p
                      className={`${
                        order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "text-green-500"
                          : "text-red-500"
                      }  `}
                    >
                      {order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "Đã thanh toán"
                        : "Chua thanh toán"}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <p>Số tiền: </p>
                    <span className="text-slate-600">
                      {dolaSymbol}
                      {order.totalPrice && order.totalPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="heading">Trạng thái đơn hàng</p>
                <div className="headingData">
                  <div className="flex gap-3">
                    <p className="flex gap-3">
                      Đơn hàng:{" "}
                      <p
                        className={`${
                          order.orderStatus && order.orderStatus === "Delivered"
                            ? "text-green-500"
                            : "text-red-500"
                        }  `}
                      >
                        {order.orderStatus && order.orderStatus === "Delivered"
                          ? "Đã giao hàng"
                          : order.orderStatus === "Shipped"
                          ? "Đang vận chuyển"
                          : "Đang xử lí"}
                      </p>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="heading">Chi tiết đơn hàng: </p>
                <div className="headingData">
                  {order.orderItems &&
                    order.orderItems.map((item, index) => {
                      console.log(order.orderItems);
                      return (
                        <div
                          key={index}
                          className="flex gap-x-7 mt-3 items-center"
                        >
                          <img
                            className="w-[10vmax] md:w-[5vmax]"
                            src={item.image}
                            alt="Product"
                          />
                          <Link
                            className="capitalize"
                            to={`/product/${item.product}`}
                          >
                            {item.name}
                          </Link>
                          <span>
                            {item.quantity} X {dolaSymbol}
                            {item.price} ={" "}
                            <b>
                              {dolaSymbol}
                              {item.price * item.quantity}
                            </b>
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
