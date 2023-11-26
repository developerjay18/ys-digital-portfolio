import React from 'react';
import { FooterImg, FB, Insta, LD, WP } from '../../assets';
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
        <div className="lower">
          <div className="links w-1/3 flex border">
            {socialLinks.map((link, index) => {
              return (
                <Link to={link.url} key={index}>
                  <div className="border">
                    <img src={link.imgUrl} alt="icon" className='w-[40%]'/>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="nav-links w-1/3"></div>
          <div className="copyright w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
