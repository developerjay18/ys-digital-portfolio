import React from 'react';
import { Call, Email } from '../../assets';

function ContactSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto py-10 flex flex-col lg:flex-row contact gap-10 lg:gap-0">
      {/* left  */}
      <div className="left lg:w-1/2 flex flex-col gap-5">
        <h4 className="text-2xl">Want to work with me?</h4>
        <h1 className="text-5xl font-bold">Drop Me A Message</h1>
        <p className="text-xl pr-10">
          I look forward to collaborating with you soon! Kindly send an email
          with your information, and I will reach out for additional
          discussions.
        </p>
        <div className="wrapper flex flex-col gap-3">
          <div className="phone flex items-center  gap-4">
            <div className="w-[5%]">
              <img src={Call} alt="icon" />
            </div>
            <div className="">+91 99248 94090</div>
          </div>
          <div className="email flex items-center gap-4">
            <div className="w-[5%]">
              <img src={Email} alt="icon" />
            </div>
            <div className="">contactyash2004@gmail.com</div>
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="right lg:w-1/2">
        <div className="">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="your name" className="capitalize text-xl">
                your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-[#fff] border-b-[1px] pt-1 mt-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="your email" className="capitalize text-xl">
                your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#fff] border-b-[1px] pt-1 mt-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="your phone" className="capitalize text-xl">
                your phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-[#fff] border-b-[1px] pt-1 mt-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="your msg" className="capitalize text-xl">
                your message
              </label>
              <input
                type="text"
                name="msg"
                id="msg"
                className="bg-[#fff] border-b-[1px] pt-1 mt-3"
              />
            </div>
            <button
              type="submit"
              className="bg-red text-white py-3 px-8 capitalize w-[40%] lg:w-[30%] hover:bg-[#CA0606] mt-6"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
