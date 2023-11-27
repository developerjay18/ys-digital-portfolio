import React from 'react';
import { FooterImg } from '../../assets';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data';

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="container px-5 lg:px-0 mx-auto py-10 flex flex-col">
        {/* upper  */}
        <div className="upper">
          <img src={FooterImg} alt="footer-img" className="border-b-[1px]" />
        </div>
        {/* lower  */}
        <div className="lower mt-7 flex items-center">
          <div className="links w-1/3 flex gap-6">
            {socialLinks.map((link, index) => {
              return (
                <Link to={link.url} key={index}>
                  <i className={`fa-brands ${link.iconName} fa-2xl`}></i>
                </Link>
              );
            })}
          </div>
          <div className="nav-links w-1/3">
            <div className="flex justify-center gap-5">
              <Link to="/terms-and-conditions" className="border-r-2 pr-4">
                <div>Terms &amp; Conditions</div>
              </Link>
              <Link to={'/privacy-policy'}>
                <div>Privacy Policy</div>
              </Link>
            </div>
          </div>
          <div className="copyright w-1/3">
            <div className="upper flex gap-1 justify-end">
              <span>Developed by</span>
              <span>
                <Link to="http://www.jayraiweb.com">Jayrai web</Link>
              </span>
            </div>
            <div className="lower capitalize text-right">
              copyright @2023 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
