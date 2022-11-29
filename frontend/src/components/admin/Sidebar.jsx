import React from "react";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="w-full bg-white py-24 flex flex-col gap-10 h-full px-10 ">
      <Link className="sidebarLinkStyles border-b-2" to="/admin/dashboard">
        <p>
          <DashboardIcon /> Bảng điều khiển
        </p>
      </Link>
      <Link className="sidebarLinkStyles border-b-2" to="#">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Sản phẩm">
            <Link className="sidebarLinkStyles border-b-2" to="/admin/products">
              <TreeItem nodeId="2" label="Tất cả" icon={<PostAddIcon />} />
            </Link>

            <Link className="sidebarLinkStyles border-b-2" to="/admin/product">
              <TreeItem nodeId="3" label="Tạo" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link className="sidebarLinkStyles border-b-2" to="/admin/orders">
        <p>
          <ListAltIcon /> Đơn hàng
        </p>
      </Link>
      <Link className="sidebarLinkStyles border-b-2" to="/admin/users">
        <p>
          <PeopleIcon /> Người dùng
        </p>
      </Link>
      <Link className="sidebarLinkStyles border-b-2" to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Đánh giá
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
