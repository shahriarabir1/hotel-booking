import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
