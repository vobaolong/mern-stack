import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="w-24 md:w-full flex flex-col justify-center  md:justify-start md:flex-row gap-6 py-3 h-auto items-start box-border">
      <img
        className="w-[12vmax] md:w-[6vmax]"
        src={item.image}
        alt="cartitem"
      />
      <div className="flex flex-col mx-[0.3vmax] my-[1vmax]">
        <Link
          className="font-medium capitalize"
          to={`/product/${item.product}`}
        >
          {item.name}
        </Link>
        <span className="text-slate-600">{`Price: $${item.price}`}</span>
        <p
          onClick={() => deleteCartItems(item.product)}
          className="bg-red-300 w-[150px] hover:bg-red-400 hover:shadow-lg transition-all duration-500 text-white cursor-pointer py-[0.1em] rounded-md text-center mt-2"
        >
          Xóa
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
