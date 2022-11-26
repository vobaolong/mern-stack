import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import footerData from "./data/footerData.json";
import "./App.css";

import store from "./store";
import { loadUser } from "./actions/userAction";
import ElementWithRoutes from "./routes/ElementWithRoutes";
import axios from "axios";

function App() {
  const menuOptions = [
    {
      menuName: "Home",
      path: "/",
    },
    {
      menuName: "Products",
      path: "/products",
    },
    {
      menuName: "About Us",
      path: "/aboutus",
    },
    {
      menuName: "Contact Us",
      path: "/contactus",
    },
  ];

  const [stripeApikey, setStripeApiKey] = useState("");

  const getStripeApiKey = async () => {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto"],
      },
    });

    // loading user data
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <>
      {/* Navbar components */}
      <Navbar webName="G10Store" menuOptions={menuOptions} />

      {/* All routes */}
      <ElementWithRoutes stripeApiKey={stripeApikey} />

      {/* Footer component */}
      <Footer jsonData={footerData} />
    </>
  );
}

export default App;
