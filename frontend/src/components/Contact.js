import React from "react";
import { Link } from "react-router-dom";
import Banner from "./layout/Banner";

const Contact = () => {
  return (
    <>
      <Banner
        src="https://res.cloudinary.com/hba-solver/image/upload/v1657882267/banner/bg2_a9w4ja.png"
        search="false"
        text="Contact Us"
      />
      <section class="contact-section pt-100 pb-100">
        <div class="container">
          <div class="row justify-content-center mb-40">
            <div class="col-md-6 text-center">
              <h5 class="title-25 text-uppercase">
                Get in touch! <br />
                will contact you soon
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="contact-form-area">
                <div class="form-wrap box--shadow">
                  <h4 class="title-25 contact-form-title mb-8">Get In Touch</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form
                    class="contact-form-title"
                    action="https://formsubmit.co/hy106625@gmail.com"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-inner">
                          <label>Your Name</label>
                          <input
                            type="text"
                            name="fname"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-inner">
                          <label>Email</label>
                          <input
                            type="text"
                            name="fname"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-12 mb-40">
                        <div class="form-inner">
                          <textarea
                            name="message"
                            placeholder="Your message"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12 pb-3">
                        <Link to="/" class="primary--btn contact-btn">
                          <button
                            type="submit"
                            style={{
                              border: "none",
                              background: "none",
                              color: "white",
                            }}
                          >
                            Send Message
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row contact-info-area g-4 justify-content-center pt-100">
            <div class="col-lg-4 col-md-6">
              <div class="branch-info-item">
                <div class="branch-info-header">
                  <h4>Branch No 01</h4>
                </div>
                <div class="branch-info-body box--shadow">
                  <ul class="text-center">
                    <li>Address: 1ST Vo Van Ngan, HoChiMinh City</li>
                    <li>Email:19110234@gmail.com</li>
                    <li>Phone: +81 37807301300</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
