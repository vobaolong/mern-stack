import React from "react";
import FooterContent from "./FooterContent";
import CustomIcon from "./../../Icons/CustomIcon";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = ({ jsonData }) => {
  const footerData = jsonData[0];
  const heading = footerData.heading[0];
  const socialMediaData = footerData.socialMediaLinks;

  // soical media icons list
  const socialMediaIcons = [
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram,
  ];

  return (
    <div className="bg-primaryBlue w-[100%] top-full">
      <div className="flex flex-col lg:justify-center lg:flex-row py-16 px-8 lg:px-24">
        <div className="lg:w-1/4 flex items-center">
          <h1 className="text-primaryBlue font-bold text-2xl text-center md:text-left pb-5">
            {footerData.companyName}
          </h1>
        </div>
        <div className="lg:w-1/3 pr-10">
          <h1 className="text-primaryBlue font-semibold uppercase tracking-widest">
            {heading.aboutus}
          </h1>
          <p className="mt-5 text-lightGray">{footerData.aboutCompany}</p>
          <div className="flex gap-2 mt-5  justify-start items-center">
            {socialMediaData &&
              socialMediaData.map((data, index) => {
                return (
                  <a
                    key={index}
                    className="rounded-full h-fit w-fit  transition-all duration-500 text-white"
                    href={data.link}
                  >
                    <CustomIcon Icon={socialMediaIcons[index]} />
                  </a>
                );
              })}
          </div>
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
            <span className="text-primaryBlue"> {footerData.companyName} </span>{" "}
            All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
