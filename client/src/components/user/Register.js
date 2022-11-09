import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../redux/actions/userActions";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onchange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData title={"Register User"} />

      <h3 className="title-30 text-center mb-35">Register Your Account</h3>

      <form
        className="login-form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        <div className="row">
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="name_field">Name</label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner hidden-icon">
              <label htmlFor="password_field">Password *</label>
              <input
                type="password"
                name="password"
                placeholder="abcdef*****"
                value={password}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="avatar_upload">Avatar</label>
            <div className="d-flex align-items-center">
              <div>
                <figure className="avatar mr-3 item-rtl">
                  <img
                    src={avatarPreview}
                    className="rounded-pill"
                    alt="Avatar Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onchange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose Avatar
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="form-inner">
              <button
                className="primary--btn login-btn"
                type="submit"
                style={{ border: "none", background: "none" }}
                // disabled={loading ? true : false}
              >
                <Link to="" className="primary--btn login-btn">
                  CREATE AN ACCOUNT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
