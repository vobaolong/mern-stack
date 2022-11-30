import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../../components/layout/MetaData";
import { Home, LocationCity, Phone } from "@material-ui/icons";
import InputField from "../../components/user/InputField";
import Button from "../../components/user/Button";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navgiate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [fullname, setFullname] = useState(shippingInfo.fullname);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Số điện thoại phải là 10 số");
      return;
    }

    dispatch(
      saveShippingInfo({
        fullname,
        address,
        city,
        phoneNo,
      })
    );
    navgiate("/order/confirm");
  };
  return (
    <Fragment>
      <div className="h-auto py-24">
        <MetaData title={`Thông tin vận chuyển`} />

        <CheckoutSteps activeStep={0} />
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
          <h2 className="text-2xl mb-5 pb-5 border-b-2 border-secondaryDark font-semibold w-fit mx-auto">
            Thông tin vận chuyển
          </h2>

          <form
            className="h-[80%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div className="w-full mb-5">
              <div className="flex gap-5 justify-evenly flex-col h-full ">
                <InputField
                  type="text"
                  name="fullname"
                  placeholder="Họ và tên *"
                  Icon={Home}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />

                <InputField
                  type="text"
                  name="address"
                  placeholder="Số nhà, đường, phường (xã), quận (huyện) *"
                  Icon={Home}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <InputField
                  type="text"
                  name="city"
                  placeholder="Thành phố *"
                  Icon={LocationCity}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <InputField
                  type="tel"
                  name="phoneNO"
                  placeholder="Số điện thoại *"
                  Icon={Phone}
                  value={phoneNo}
                  size="10"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>

            <Button label="Tiếp tục" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
