import React from "react";
import FooterContent from "./FooterContent";
import logo from "../../../assets/logo.png";
const Footer = ({ jsonData }) => {
  const footerData = jsonData[0];
  const heading = footerData.heading[0];

  return (
    <div className="bg-primaryBlue w-[100%] top-full">
      <div className="flex flex-col lg:justify-center lg:flex-row py-16 px-8 lg:px-24">
        <div className="lg:w-1/4 flex items-center">
          <img className="w-[70%]" src={logo} alt="logo" />
        </div>
        <div className="lg:w-1/3 pr-10">
          <h1 className="text-primaryBlue font-semibold uppercase tracking-widest">
            {heading.aboutus}
          </h1>
          <p className="mt-5 text-lightGray text-justify my-5 mr-10">
            {footerData.aboutCompany}
          </p>
        </div>
        <div className="mt-5 mb-5 lg:mt-0 lg:mb-0 lg:w-1/3">
          <FooterContent
            title={heading.information}
            data={footerData.infoData}
          />
        </div>
        <div className="lg:w-1/3">
          <FooterContent
            title={heading.account}
            data={footerData.accountInfo}
          />
        </div>
      </div>
      <div className="bg-primaryDarkBlue py-5 px-8 md:px-24 flex flex-col md:flex-row items-center justify-center">
        <div>
          <p className="text-lightGray tracking-wider text-sm text-center">
            Copyright &copy; 2022 by{" "}
            <span className="text-primaryBlue"> {footerData.companyName}</span>.
            All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
