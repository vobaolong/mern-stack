import React, { Fragment } from "react";
import CartItemCard from "../../components/Cart/CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import QuantityCardInput from "../../components/Cart/QuantityCardInput";
import {
  addItemsToCart,
  removeItemsFromCart,
  resetCart,
} from "../../actions/cartAction";
import { Link, useNavigate } from "react-router-dom";
import { RemoveShoppingCart } from "@material-ui/icons";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (stock <= quantity) {
      return;
    }

    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteItemsFromCart = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const clearCartHandle = async () => {
    await dispatch(resetCart());
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="isEmptyCart h-screen flex flex-col gap-3 justify-center items-center ">
          <RemoveShoppingCart />
          <p className="text-slate-500 text-xl">Không có sản phẩm trong giỏ hàng</p>
          <Link
            className="bg-primaryBlue text-white px-10 py-2 rounded-md hover:scale-105 transition-all duration-500"
            to="/products"
          >
            Mua sắm ngay!
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage h-auto py-24">
            <div className="cartHeader overflow-x-auto md:overflow-x-hidden bg-primaryBlue w-[90%] mx-auto box-border text-white grid grid-cols-3 md:grid-cols-6 rounded-t-xl">
              <p className="m-5 md:col-span-4">Sản phẩm</p>
              <p className="m-5">Số lượng</p>
              <p className="m-5 text-right">Tổng</p>
            </div>

            <div className="cartContainer w-[90%] px-5 bg-slate-100 mx-auto flex flex-col gap-5 divide-y">
              {cartItems?.map((item, index) => {
                return (
                  <div key={index} className="grid grid-cols-3 md:grid-cols-6">
                    <div className="md:col-span-4 place-items-start">
                      <CartItemCard
                        item={item}
                        deleteCartItems={deleteItemsFromCart}
                      />
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <QuantityCardInput
                        quantity={item.quantity}
                        increaseQuantity={() =>
                          increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock
                          )
                        }
                        decreaseQuantity={() =>
                          decreaseQuantity(item.product, item.quantity)
                        }
                      />
                    </div>
                    <div className="flex justify-end items-center">
                      <p className="font-medium">{`$${
                        item.price * item.quantity
                      }`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[90%] flex mx-auto md:flex-row sm:flex-col gap-5 divide-y">
              <div className="px-5 md:w-1/2 lg:w-1/5">
                <input
                  type="submit"
                  onClick={clearCartHandle}
                  className="bg-red-600 w-full hover:shadow-lg py-2 rounded-md text-white mt-5 transition-all duration-500 hover:scale-105 cursor-pointer"
                  value="Xóa toàn bộ sản phẩm"
                />
              </div>
              <div className="grid place-items-end w-[90%] mx-auto flex ">
                <div className="flex justify-between px-5 py-5 border-t-4 border-primaryDarkBlue w-full md:w-1/2 lg:w-1/3 ">
                  <p className="font-bold text-[1.2em] ">Thành tiền</p>
                  <p className="font-bold text-[1em]">{`$
                  ${cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}
                `}</p>
                </div>
                <div className="px-5 w-full md:w-1/2 lg:w-1/5">
                  <button
                    onClick={checkoutHandler}
                    className="bg-primaryBlue w-full hover:shadow-lg py-2 rounded-md text-white mt-10 transition-all duration-500 hover:scale-105"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
