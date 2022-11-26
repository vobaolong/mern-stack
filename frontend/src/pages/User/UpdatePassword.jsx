import React, { useState, useEffect } from "react";
import { MdLockOpen, MdLock, MdVpnKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/user/Button";
import InputField from "../../components/user/InputField";
import Loader from "../../components/layout/Loader/Loader";
import MetaData from "../../components/layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";

const UpdatePassword = () => {
  // for navigation
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading, error, isUpdated } = useSelector((state) => state.profile);

  const alert = useAlert();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Password updated successfully");

      navigate("/account", { replace: true });

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [error, alert, dispatch, isUpdated, navigate]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen px-8 py-24 bg-slate-200 md:px-24">
          <MetaData title={`Update Password`} />
          <div className="bg-white shadow-lg w-full md:w-1/2 lg:w-1/3 h-[70vh] rounded-lg  mx-auto py-5 overflow-hidden">
            <h1 className="text-center text-xl text-slate-600 py-3 border-b-2 border-secondaryDark w-fit mx-auto">
              Change Password{" "}
            </h1>
            <form
              className="h-[80%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
              onSubmit={updatePasswordSubmit}
            >
              <div className="w-full mb-2">
                <div className="flex gap-5 justify-evenly flex-col h-full ">
                  <InputField
                    inputType="password"
                    name="oldPassword"
                    placeholder="Old Password"
                    Icon={MdVpnKey}
                    value={oldPassword}
                    setOnChangeValue={(e) => setOldPassword(e.target.value)}
                  />
                  <InputField
                    inputType="password"
                    name="newPassword"
                    placeholder="New Password"
                    Icon={MdLockOpen}
                    value={newPassword}
                    setOnChangeValue={(e) => setNewPassword(e.target.value)}
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
              <Button label="Change" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdatePassword;
