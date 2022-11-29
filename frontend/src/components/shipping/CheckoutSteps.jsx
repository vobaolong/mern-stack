import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import {
  AccountBalance,
  LibraryAddCheck,
  LocalShipping,
} from "@material-ui/icons";
import React from "react";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Thông tin vận chuyển</Typography>,
      icon: <LocalShipping />,
    },
    {
      label: <Typography>Xác nhận đơn hàng</Typography>,
      icon: <LibraryAddCheck />,
    },
    {
      label: <Typography>Thanh toán</Typography>,
      icon: <AccountBalance />,
    },
  ];

  const stepStyle = {
    boxSizing: "bordre-box",
  };
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyle}>
        {steps.map((item, index) => {
          return (
            <Step
              key={index}
              active={activeStep === index ? true : false}
              completed={activeStep >= index ? true : false}
            >
              <StepLabel
                style={{
                  color: activeStep >= index ? "#0e8f99" : "raba(0,0,0,0.648)",
                }}
                icon={item.icon}
              >
                {item.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

export default CheckoutSteps;
