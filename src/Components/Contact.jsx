import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Information</h1>
        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-2">Office Address</h2>
            <p>123 Main Street</p>
            <p>Cityville, State 12345</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-2">Contact Details</h2>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
