import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import { dolaSymbol } from "../../constants/constants";
import SlideableBtn from "../../components/layout/Buttons/SlideableBtn";

const ConfirmOrder = () => {
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const totalPrice = subtotal + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/process/payment");
  };

  return (
    <Fragment>
      <div className="h-auto py-24 px-8 md:px-0">
        <MetaData title="Shipping Details" />

        <CheckoutSteps activeStep={1} />
        <div className="w-full md:w-[85%] mx-auto">
          <h2 className="text-2xl mb-5 pb-5 border-b-2 border-secondaryDark font-semibold w-fit mx-auto">
            Confirm Order
          </h2>
          <div>
            <div className="grid grid-col-1 tall:grid-cols-6 divide-y-2 tall:divide-y-0 tall:divide-x-2 divide-secondaryDark">
              <div className="flex flex-col col-span-6 tall:col-span-4">
                <div>
                  <p className="text-xl font-bold">Shipping Info</p>
                  <div className="px-5 md:px-10 mt-3 flex flex-col gap-2">
                    <div className="flex gap-3 ">
                      <p>Name: </p>
                      <span className="text-slate-600">
                        {shippingInfo.fullname}
                      </span>
                    </div>
                    <div className="flex gap-3 ">
                      <p>Phone: </p>
                      <span className="text-slate-600">
                        {shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div className="flex gap-3 ">
                      <p>Address: </p>
                      <span className="text-slate-600">{address}</span>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-xl font-bold">Your Cart Items: </p>
                  <div>
                    {cartItems &&
                      cartItems.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex px-5 md:px-10 gap-x-7 mt-3 items-center"
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

              {/*  */}
              <div className="tall:pl-8 py-5 mt-3 md:mt-0 col-span-6 tall:col-span-2">
                <div>
                  <p className="text-xl font-bold text-center py-3 border-b-2">
                    Order Summery
                  </p>
                  <div className="flex flex-col gap-5 my-3">
                    <div className="flex justify-between">
                      <p>Subtotal: </p>
                      <span className="text-slate-500">{`${dolaSymbol}${subtotal}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <p>Shipping Charges: </p>
                      <span className="text-slate-500">{`${dolaSymbol}${shippingCharges}`}</span>
                    </div>
                  </div>

                  <div className="flex justify-between py-5 border-t-2">
                    <p>
                      <b>Total: </b>
                    </p>
                    <span className="font-bold">
                      {dolaSymbol}
                      {totalPrice}
                    </span>
                  </div>

                  <SlideableBtn
                    onClick={proceedToPayment}
                    label="Proceed To Continue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
