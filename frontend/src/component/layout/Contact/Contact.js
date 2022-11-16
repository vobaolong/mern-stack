import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y2tumva",
        "template_xnlhrbv",
        form.current,
        "w9ccyzffRs-6ByHms"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactContainer">
      <div className="contactSectionContainer">
        <h1>Liên hệ với chúng tôi</h1>
        <div>
          <div>
            <span>
              <i className="bx bxs-phone"></i>
              <a href="tel://0348073013">(+84)34 8073 013</a>
            </span>
            <span>
              <i className="bx bxs-envelope"></i>
              <a href="mailto:19110234@student.hcmute.edu.vn">
                19110234@student.hcmute.edu.vn
              </a>
            </span>
            <span>
              <i className="bx bxs-map"></i>1 Võ Văn Ngân, Phường Linh Chiểu,
              Thành phố Thủ Đức, Thành phố Hồ Chí Minh.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Giới thiệu về cửa hàng</h2>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <label>Tên</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Nội dung</label>
              <textarea name="message" required />
              <input type="submit" value="GỬI" required />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
