import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our website! We are a team of passionate individuals
          dedicated to providing high-quality services/products/content (replace
          with your specific focus) to our users.
        </p>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
          turpis at libero dapibus venenatis. Integer vel turpis vitae libero
          commodo tincidunt. Sed consectetur, libero vel consectetur venenatis,
          mauris nunc ullamcorper elit, eget cursus justo magna vel eros.
        </p>
        <p className="text-lg">
          Feel free to explore our website and discover more about what we have
          to offer. If you have any questions or feedback, don't hesitate to{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
