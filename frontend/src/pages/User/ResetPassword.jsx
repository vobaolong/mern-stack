import React, { useState, useEffect } from "react";
import { MdLockOpen, MdLock } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/user/Button";
import InputField from "../../components/user/InputField";
import Loader from "../../components/layout/Loader/Loader";
import MetaData from "../../components/layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";

const ResetPassword = () => {
  // for navigation
  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.forgotPassword
  );

  const alert = useAlert();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password updated successfully");

      navigate("/login", { replace: true });
    }
  }, [error, alert, dispatch, success, navigate]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen px-8 py-24 bg-slate-200 md:px-24">
          <MetaData title={`Rest Password`} />
          <div className="bg-white shadow-lg w-full md:w-1/2 lg:w-1/3 h-[70vh] rounded-lg  mx-auto py-5 overflow-hidden">
            <h1 className="text-center text-xl text-slate-600 py-3 border-b-2 border-secondaryDark w-fit mx-auto">
              Rest Password{" "}
            </h1>
            <form
              className="h-[80%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
              onSubmit={updatePasswordSubmit}
            >
              <div className="w-full mb-2">
                <div className="flex gap-5 justify-evenly flex-col h-full ">
                  <InputField
                    inputType="password"
                    name="password"
                    placeholder="New Password"
                    Icon={MdLockOpen}
                    value={password}
                    setOnChangeValue={(e) => setPassword(e.target.value)}
                  />
                  <InputField
                    inputType="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    Icon={MdLock}
                    value={confirmPassword}
                    setOnChangeValue={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button label="Reset" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
