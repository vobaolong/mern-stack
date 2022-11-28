import React, { useState, useRef, useEffect } from "react";
import { MdMailOutline, MdLockOpen, MdPerson } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/user/Button";
import InputField from "../../components/user/InputField";
import Loader from "../../components/layout/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [show, setShow] = useState(false);

  const [avatar, setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const path = user?.role === "admin" ? "/" : "/account";
  const redirect = location.search ? location.search.split("=")[1] : path;

  const handleShowHide = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect, { replace: true });
    }
  }, [error, alert, dispatch, redirect, isAuthenticated, navigate]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", registerName);
    myForm.set("email", registerEmail);
    myForm.set("password", registerPassword);
    myForm.set("avatar", avatar);

    if (registerPassword !== cpassword) {
      alert.error("Password doesn't match");
    } else {
      dispatch(register(myForm));
    }
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen px-8 py-24 bg-slate-200 md:px-24 ">
          <div className="bg-white shadow-lg w-full md:w-1/2 lg:w-1/3 h-[80vh] rounded-lg  mx-auto py-5 overflow-hidden">
            <div>
              <div className="flex justify-evenly">
                <p
                  className="grid place-items-center cursor-pointer hover:text-secondaryDark"
                  onClick={(e) => switchTabs(e, "login")}
                >
                  Login
                </p>
                <p
                  className="grid place-items-center cursor-pointer hover:text-secondaryDark"
                  onClick={(e) => switchTabs(e, "register")}
                >
                  Register
                </p>
              </div>
              <button
                className="h-[3px] bg-primaryBlue w-1/2 transition-all duration-500"
                ref={switcherTab}
              ></button>
            </div>

            {/* Login form */}
            <form
              className="flex flex-col justify-evenly items-center h-[80%] transition-transform duration-500 "
              ref={loginTab}
              onSubmit={loginSubmit}
            >
              <div className="flex justify-evenly flex-col w-full h-[40%] px-3">
                <InputField
                  type="text"
                  name="email"
                  placeholder="Email"
                  Icon={MdMailOutline}
                  value={loginEmail}
                  autofocus
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <div className="flex">
                  <InputField
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    Icon={MdLockOpen}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  {show ? (
                    <AiFillEye
                      id="show_hide"
                      className="cursor-pointer justify-center mt-3 -ml-8 text-xl"
                      onClick={handleShowHide}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      id="show_hide"
                      className="cursor-pointer justify-center mt-3 -ml-8 text-xl"
                      onClick={handleShowHide}
                    />
                  )}
                </div>
              </div>

              <Link
                to="/password/forgot"
                className="text-secondaryDark hover:text-primaryBlue transition-all duration-500"
              >
                Forget Password ?
              </Link>
              <Button label="Login" />
            </form>

            {/* Register form */}
            <form
              className="signUpForm h-[70%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
              ref={registerTab}
              encType="multipart/form-data"
              onSubmit={registerSubmit}
            >
              <div className="w-full mb-2">
                <div className="flex gap-2 justify-evenly flex-col h-full ">
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    Icon={MdPerson}
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    autocomplete="off"
                  />

                  <InputField
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    Icon={MdMailOutline}
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    autocomplete="off"
                  />
                  <div className="flex">
                    <InputField
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      Icon={MdLockOpen}
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                    {show ? (
                      <AiFillEye
                        id="show_hide"
                        className="cursor-pointer justify-center mt-3 -ml-8 text-xl"
                        onClick={handleShowHide}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        id="show_hide"
                        className="cursor-pointer justify-center mt-3 -ml-8 text-xl"
                        onClick={handleShowHide}
                      />
                    )}
                  </div>
                  <div className="flex">
                    <InputField
                      type={show ? "text" : "password"}
                      name="cpassword"
                      placeholder="Comfirm your password"
                      Icon={MdLockOpen}
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                    />
                    {show ? (
                      <AiFillEye
                        id="show_hide"
                        className="cursor-pointer justify-center mt-3 -ml-8 text-xl"
                        onClick={handleShowHide}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        id="show_hide"
                        className="cursor-pointer justify-center mt-3 -ml-8 text-xl"
                        onClick={handleShowHide}
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-5">
                    <img
                      src={avatarPreview}
                      className="w-10 h-10 rounded-full"
                      alt="avatar preview"
                    />
                    <input
                      className="avatarChoose border-2 rounded-lg "
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <Button label="Sign Up" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
