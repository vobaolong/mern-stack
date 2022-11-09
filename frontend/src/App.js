import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

// Cart Imports
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
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

// import ProtectedRoute from "./components/route/ProtectedRoute";

// Payment
import UserPage from "./components/user/UserPage";
import Contact from "./components/Contact";
import Register from "./components/user/Register";

function App() {
<<<<<<< HEAD:frontend/src/App.js
=======
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

>>>>>>> e2fd668f5f9c85ca5b52d19838b3b8f52aad7815:client/src/App.js
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="">
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={UserPage} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <Route path="/cart" component={Cart} exact />
          {/* protected route */}
          <Route path="/shipping" component={Shipping} />
          <Route path="/confirm" component={ConfirmOrder} exact />
          <Route path="/success" component={OrderSuccess} />

          <Route path="/me" component={Profile} exact />
          <Route path="/me/update" component={UpdateProfile} exact />
          <Route path="/password/update" component={UpdatePassword} exact />

          <Route path="/orders/me" component={ListOrders} exact />
          <Route path="/order/:id" component={OrderDetails} exact />
        </div>

        <Route path="/dashboard" isAdmin={true} component={Dashboard} exact />
        <Route
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <Route
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <Route
          path="/admin/category"
          isAdmin={true}
          component={CategorysList}
          exact
        />
        <Route
          path="/admin/category/new"
          isAdmin={true}
          component={NewCategory}
          exact
        />
        <Route
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <Route
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />
        <Route
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
          exact
        />
        <Route path="/admin/users" isAdmin={true} component={UsersList} exact />
        <Route
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <Route
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
