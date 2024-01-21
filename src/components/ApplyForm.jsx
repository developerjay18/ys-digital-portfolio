import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from './config';
import { useNavigate } from 'react-router-dom';

function ApplyForm() {
  const form = useRef();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value }); // 2nd approch also available
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        form.current,
        config.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );

    setData({
      name: '',
      number: '',
      email: '',
    });

    navigate('/apply/greeting');
  };

  return (
    <div className="font-poppins bg-black min-h-screen flex justify-center items-center">
      {/* form  */}
      <form
        method="post"
        className="rounded-3xl w-[90%] lg:w-[35%] py-10 lg:py-20 px-10 flex flex-col gap-10 p-5 bg-white"
        ref={form}
        onSubmit={handleSubmit}
      >
        <div className="heading text-3xl text-center font-bold">
          Fill These Information, We Will Contact You Soon.
        </div>
        <div className="fields w-full flex flex-col gap-5">
          <div className="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="focus:outline-none text-black py-4 px-4 w-full bg-[#dbd9d9]"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Contact Number"
              className="focus:outline-none text-black py-4 px-4 w-full bg-[#dbd9d9]"
              value={data.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="focus:outline-none text-black py-4 px-4 w-full bg-[#dbd9d9]"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cta">
            <button
              type="submit"
              className="text-xl text-white bg-[#0D65D6] px-3 py-4 w-full"
            >
              Submit Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ApplyForm;
