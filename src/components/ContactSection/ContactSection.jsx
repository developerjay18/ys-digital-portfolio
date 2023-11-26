import React from 'react';
import { IntroImg } from '../../assets';

function ContactSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto py-10 flex h-[85vh]  overflow-hidden mb-10">
      {/* left  */}
      <div className="left h-[85vh] w-1/2 flex flex-col gap-6 justify-center items-center">
        <h2 className="capitalize text-6xl text-left w-full font-bold">
          contact form
        </h2>
        <div className="form w-full">
          <form action="" className="w-full flex flex-col gap-5">
            <input
              type="text"
              name="name"
              id="name"
              className="capitalize p-2 w-full bg-transparent"
              placeholder="your name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="capitalize p-2 w-full bg-transparent"
              placeholder="your email"
            />
            <input
              type="text"
              name="number"
              id="number"
              className="capitalize p-2 w-full bg-transparent"
              placeholder="your phone number"
            />
            <textarea
              name="msg"
              id="msg"
              cols="20"
              rows="5"
              value={`your message`}
              className="capitalize p-2 w-full bg-transparent"
            ></textarea>
            <button
              type="submit"
              className="capitalize text-xl w-[50%] bg-red text-white py-3 px-8"
            >
              submit
            </button>
          </form>
        </div>
      </div>
      {/* right  */}
      <div className="right w-1/2">
        <div className="w-[80%] ml-auto">
          <img src={IntroImg} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
