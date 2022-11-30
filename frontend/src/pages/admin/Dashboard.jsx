import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import Sidebar from "../../components/admin/Sidebar";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { getAdminProducts } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction";
import { dolaSymbol } from "../../constants/constants";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  Chart.register(CategoryScale);

  const state = {
    labels: ["Số tiền ban đầu", "Số tiền bán được"],
    datasets: [
      {
        label: "Tổng doanh thu",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Hết hàng", "Trong kho"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="dashboardStyle mt-5">
      <MetaData title={`Bảng điều khiển - Admin`} />
      <div className="sidebarStyle sticky left-0">
        <Sidebar />
      </div>

      <div className="dashboardRightBoxStyle">
        <div>
          <p className="upper text-center text-2xl font-bold text-gray-400">
            Bảng điều khiển
          </p>
        </div>

        {/* dashboardSummary */}
        <div className="pt-10">
          <div className="text-center text-xl py-5 text-white font-medium bg-secondaryDark">
            <p>
              Tổng doanh thu <br /> {dolaSymbol}
              {totalAmount}
            </p>
          </div>

          {/* dashboardSummaryBox2 */}
          <div className=" flex flex-row justify-center py-5 gap-7">
            <Link
              className="summryBoxStyle bg-primaryBlue"
              to="/admin/products"
            >
              <p>Sản phẩm</p>
              <p>{products?.length}</p>
            </Link>
            <Link
              className="summryBoxStyle bg-secondaryDark "
              to="/admin/orders"
            >
              <p>Đơn hàng</p>
              <p>{orders?.length}</p>
            </Link>
            <Link className="summryBoxStyle bg-gray-800" to="/admin/users">
              <p>Người dùng</p>
              <p>{users?.length}</p>
            </Link>
          </div>
        </div>

        {/* lineChart */}
        <div className="w-[80%] mx-auto">
          <Line
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        {/* doughnutChart */}
        <div className="w-[50%] md:w-[40%] mx-auto">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
