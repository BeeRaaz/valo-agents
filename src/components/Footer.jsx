import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 bg-black-50 text-white-50 font-tungsten-bold tracking-wider">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center">
          <p className="last:mb-0 text-2xl">Powered By <Link target="blank" to="https://www.linkedin.com/in/birajdulal/" className="underline transition-colors hover:text-red-50 hover:decoration-red-50">BeeRaaz</Link></p>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
