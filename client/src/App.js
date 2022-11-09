import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

// Cart Imports
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";

// Order Imports
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

// Auth or User imports
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

// Admin Imports
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";
import NewCategory from "./components/admin/NewCategory";
import CategorysList from "./components/admin/CatagoryList";

import ProtectedRoute from "./components/route/ProtectedRoute";
import { loadUser } from "./redux/actions/userActions";
import store from "./redux/store";
import axios from "axios";

// Payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UserPage from "./components/user/UserPage";
import Contact from "./components/Contact";

function App() {
<<<<<<< HEAD
  return (
    <>
      <scrollToTop />
      <Layout />
    </>
  )
=======
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripApiKey() {
      const { data } = await axios.get("/stripeapi");

      setStripeApiKey(data.stripeApiKey);
    }

    getStripApiKey();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="">
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/cart" component={Cart} exact />
          <ProtectedRoute path="/shipping" component={Shipping} />
          <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
          <ProtectedRoute path="/success" component={OrderSuccess} />
          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute path="/payment" component={Payment} />
            </Elements>
          )}

          <Route path="/login" component={UserPage} />
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute
            path="/password/update"
            component={UpdatePassword}
            exact
          />

          <ProtectedRoute path="/orders/me" component={ListOrders} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
        </div>

        <ProtectedRoute
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <ProtectedRoute
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/category"
          isAdmin={true}
          component={CategorysList}
          exact
        />
        <ProtectedRoute
          path="/admin/category/new"
          isAdmin={true}
          component={NewCategory}
          exact
        />
        <ProtectedRoute
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />
        <ProtectedRoute
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
          exact
        />
        <ProtectedRoute
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          exact
        />
        <ProtectedRoute
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <ProtectedRoute
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          exact
        />
        <Footer />
        {/* {!loading && (!isAuthenticated || user.role !== "admin") && } */}
      </div>
    </Router>
  );
>>>>>>> c20aed94609afb8ae8401bfb12703baa62716742
}

export default App;
