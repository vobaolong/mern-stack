import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrrzssf",
        "template_jmgmnuj",
        form.current,
        "wj1KVPLMC5fGuwGhv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="">
      <div className="h-full flex mt-28 m-10 bg-primaryBlue rounded-3xl py-5 flex-wrap">
        <div className="w-[100%] px-5">
          <h1 className="text-primaryBlue text-3xl font-semibold uppercase tracking-widest mt-5 text-center">
            Thông tin liên lạc
          </h1>
        </div>
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col p-8 justify-around text-lightGray w-[100%] text-lg">
          <div className="xl:w-[30%] lg:w-[30%] md:w-[100%] sm:w-[100%] mx-3">
            {/* place */}
            <div className="py-4 sm:p-0 flex lg:flex-row sm:flex-wrap items-center">
              <div className="pr-2">
                <AiOutlineHome className="w-10 h-12" />
              </div>
              <div>
                01 Vo Van Ngan street, Linh Chieu ward, Thu Duc city, Ho Chi
                Minh city
              </div>
            </div>
            {/* phone */}
            <div className="py-4 sm:p-0 flex flex-wrap items-center">
              <div className="pr-2">
                <AiOutlinePhone className="w-10 h-12" />
              </div>
              <div> 0348073013</div>
            </div>
            {/* email */}
            <div className="py-4 sm:p-0 sm:pb-5 flex flex-wrap items-center">
              <div className="pr-2">
                <AiOutlineMail className="w-10 h-12" />
              </div>
              <div>groupcnpmmernstack@gmail.com</div>
            </div>
          </div>
          <div className="xl:w-[70%] sm:w-[100%]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex xl:flex-row lg:flex-row sm:flex-col flex-wrap text-black"
            >
              <div className="lg:w-[40%] sm:w-[100%] px-3">
                <input
                  className="w-[100%] p-2 my-2 rounded-lg h-11"
                  name="user_name"
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
                <input
                  className="w-[100%] p-2 my-2 rounded-lg h-11"
                  name="user_email"
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
                <input
                  className="w-[100%] p-2 my-2 rounded-lg h-11"
                  name="subject"
                  placeholder="Title"
                  type="text"
                  required
                />
              </div>
              <div className="lg:w-[60%] sm:w-[100%] px-3 flex flex-wrap justify-end">
                <textarea
                  className="w-[100%] p-2 my-2 rounded-lg h-40"
                  name="message"
                  placeholder="Subject"
                  type="text"
                ></textarea>
                <button
                  type="submit"
                  value="submit"
                  className="xl:w-[30%] lg:w-[30%] sm:w-[100%] bg-sky-500/50 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
