import React from "react";
import aboutUsImg from "../assets/about.png";
const AboutUs = () => {
  return (
    <div className="">
      <div className="h-full flex mt-28 m-10 bg-primaryBlue rounded-3xl py-5">
        <div className="w-[50%] px-5">
          <img src={aboutUsImg} alt="aboutusImg" className="rounded-xl" />
        </div>
        <div class="w-[50%] px-5">
          <h1 class="text-primaryBlue text-3xl font-semibold uppercase tracking-widest mt-8">
            Thông tin về chúng tôi
          </h1>
          <p class="mt-5 text-lightGray">
            <strong>G10Store</strong> là công ty chuyên cung cấp các sản phẩm về
            công nghệ như Laptop, PC, phụ kiện PC hàng đầu hiện nay.
            <br />
            Là sản phẩm đầu tay cũng như là đứa con tinh thần của cả nhóm 10
            <br />
            Các thành viên sáng lập:
            <ul className="list-disc pl-4">
              <li>Lưu Ngạn Lâm</li>
              <li>Võ Bảo Long</li>
              <li>Đỗ Minh Quân</li>
            </ul>
            Sứ mệnh của G0Store là sẽ cũng cố hơn nữa về mặt kỹ thuật để có thể
            đưa nào hoạt động rộng rãi và chính thức
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
