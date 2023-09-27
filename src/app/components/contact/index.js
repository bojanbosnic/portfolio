import React from "react";

const index = () => {
  return (
    <div className="flex justify-between items-center gap-20 my-44">
      <div className="w-1/2">
        <span className="uppercase">Get In Touch</span>
        <h1 className="font-drugi max-w-xs">Let's work together!</h1>
      </div>
      <div className="w-1/2">
        <form className="z-10 flex  px-4 flex-col outline-0 py-15  bg-transparent border border-cyan-100 rounded-lg md:mt-0">
          <div className="my-6">
            {/* <label htmlFor="name_id" className="font-medium">
              Your Name{" "}
            </label> */}
            {/* <div className="relative"> */}
            <input
              id="name_id"
              name="user_name"
              type="text"
              className="z-10"
              placeholder="Your Name"
            />
            {/* <label htmlFor="name_id"></label> */}
            {/* </div> */}
          </div>
          <div className="my-6">
            {/* <label htmlFor="email_id" className="font-medium ">
              Your Email{" "}
            </label> */}
            <div className="relative">
              <input
                id="email_id"
                type="email"
                name="user_email"
                className="z-10"
                placeholder="Your Email"
              />
              {/* <label htmlFor="email_id"></label> */}
            </div>
          </div>
          <div>
            {/* <label htmlFor="msg_id" className="font-medium ">
              Your Message{" "}
            </label> */}
            <div className="relative">
              <textarea
                id="msg_id"
                name="user_message"
                placeholder="Your Message"
              />
              <label htmlFor="msg_id"></label>
            </div>
          </div>
          <button type="submit" className="w-1/3 pointer btn btn-sm my-8">
            Pošalji poruku
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
