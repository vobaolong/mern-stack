import React, { useEffect } from "react";
import MetaData from "../../components/layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/layout/Loader/Loader";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${user.name} Profile`} />
          <div className="h-full md:h-screen w-full flex flex-col py-12 md:py-0 md:flex-row px-8  bg-slate-100">
            <div className="flex flex-col w-full h-screen justify-center items-center">
              <h1 className="text-2xl md:-translate-x-9 -translate-y-5 justify-center items-center text-primaryBlue">
                My Profile
              </h1>
              <img
                className="w-60 h-60 rounded-full shadow-xl border-4 border-primaryDarkBlue transition-transform duration-500 hover:scale-105"
                src={user.avatar.url ? user.avatar.url : "/profile.png"}
                alt={user.name}
              />
              <Link
                className="profileLinkBtnStyle bg-secondaryDark"
                to="/update"
              >
                Edit Profile
              </Link>
            </div>

            <div className="flex flex-col w-full h-screen justify-evenly py-24 items-start box-border">
              <div>
                <h4 className="profileTitle">Full Name</h4>
                <p className="profileValue">{user.name}</p>
              </div>
              <div>
                <h4 className="profileTitle">Email</h4>
                <p className="profileValue">{user.email}</p>
              </div>
              <div>
                <h4 className="profileTitle">Joined On</h4>
                <p className="profileValue">
                  {String(user.createdAt).substr(0, 10)}
                </p>
              </div>
              <div className="flex flex-col gap-y-5 w-full md:w-[40%]">
                <Link
                  className="profileLinkBtnStyle bg-primaryBlue text-center"
                  to="/orders/me"
                >
                  My Orders
                </Link>
                <Link
                  className="profileLinkBtnStyle bg-primaryBlue text-center"
                  to="/password/update"
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
