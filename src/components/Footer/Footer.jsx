import React from 'react';
import { FooterImg } from '../../assets';

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="container px-5 lg:px-0 mx-auto py-10 flex">
        {/* upper  */}
        <div className="upper">
          <img src={FooterImg} alt="footer-img" className="border-b-[1px]" />
        </div>
        {/* lower  */}
        <div className="lower">
          <div className="links"></div>
          <div className="nav-links"></div>
          <div className="copyright"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
