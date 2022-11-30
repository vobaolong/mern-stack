import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    size: "large",
    readOnly: true,
    precision: 0.5,
    value: product.ratings,
  };

  return (
    <Link
      to={`/product/${product._id}`}
      className="flex flex-col justify-between w-60 h-[400px] m-auto rounded-lg shadow-xl bg-secColor overflow-hidden md:hover:shadow-xl transition-all duration-300 md:hover:scale-105 group decoration-transparent"
      title={`Name: ${product.name} \nPrice: $${product.price} \nRating: ${product.ratings} ★`}
    >
      <div className="h-fit overflow-hidden p-2">
        <img
          className="object-contain rounded-lg"
          src={product.images[0].url}
          alt={product.name}
        />
      </div>

      <div className="px-3 py-2 text-center bg-white">
        <div className="w-full flex justify-center items-center flex-col pb-1">
          <Rating {...options} />
          <span className="text-gray-500">
            ({product.numOfReviews} đánh giá)
          </span>
        </div>

        <p className="text-secondaryDark font-bold text-md capitalize line-clamp-2">
          {product.name}
        </p>

        <span className="text-red-600 font-semibold">${product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
