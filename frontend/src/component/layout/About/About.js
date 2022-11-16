import React from "react";
import "./aboutSection.css";
import aboutImg from "../../../images/about.png";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1>About Us</h1>
        <div>
          <div>
            <img
              style={{ width: "35vmax", height: "20vmax", margin: "2vmax 0" }}
              src={aboutImg}
              alt="Founder"
            />
          </div>
          <div className="aboutSectionContainer2">
            <h2>Giới thiệu về cửa hàng</h2>
            <span>
              G10 Store được thành lập vào tháng 10/2022 bởi 3 thành viên đồng
              sáng lập là Võ Bảo Long, Đỗ Minh Quân và Lưu Ngạn Lâm, lĩnh vực
              hoạt động chính của cửa hàng bao gồm: mua bán sửa chữa các thiết
              bị liên quan đến laptop, PC, thiết bị kỹ thuật số và các lĩnh vực
              liên quan đến thương mại điện tử. G10 Store là cửa hàng chuyên
              cung cấp các sản phẩm linh kiện điện tử như Laptop, PC, chuột máy
              tính, tai nghe,... online hàng đầu hiện nay
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
