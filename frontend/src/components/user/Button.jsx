import React from "react";

const Button = ({ label, disabled, ref, onClick }) => {
  return (
    <>
      {disabled === true ? (
        <button
          type="submit"
          className="bg-primaryBlue text-center flex gap-2 px-5 w-full py-2 text-white rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-105"
          disabled
        >
          <svg
            className="w-5 h-5 mr-3 border-r-2 border-white rounded-full bg-transparent animate-spin"
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      ) : (
        <input
          className="bg-primaryBlue px-10 py-2 text-white rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-105"
          type="submit"
          ref={ref && ref}
          value={label}
          onClick={onClick && onClick}
          disabled={disabled ? disabled : false}
        />
      )}
    </>
  );
};

export default Button;
