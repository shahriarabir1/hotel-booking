import React from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Confirm = () => {
  let s = 0;
  const uid = localStorage.getItem("uid").trim();
  const token = localStorage.getItem("token");
  console.log(token);
  const selector = useSelector((state) => state);
  const navigate = useNavigate();
  const price = selector.Products.item.map((item) => item.price);

  if (price.length === 0) {
    navigate("/");
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          address: "",
          message: "",
          payment: "",
          checkin: "",
        }}
        onSubmit={(values) => {
          const order = { ...values, price: price, date: new Date(), uid: uid };
          
          axios
            .post(
              "https://hotel-booking-8d336-default-rtdb.firebaseio.com/order.json?auth=" +
                token,
              order
            )
            .then((res) => {
              if (res.status === 200) {
                alert("Booking Done");
              } else {
                alert("Something Wrong");
              }
              setTimeout(() => {
                navigate("/");
                window.location.reload();
              }, 2000);
            })
            .catch((err) => {
              alert("Something Wrong");
            });
        }}
        validate={(v) => {
          const err = {};
          if (!v.email) {
            err.email = "Required";
          } else {
            const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!valid.test(v.email)) {
              err.email = "use a valid email";
            }
          }

          if (!v.name) {
            err.name = "Required";
          }

          if (!v.phone) {
            err.phone = "Required";
          }
          if (!v.address) {
            err.address = "Required";
          }
          if (!v.payment) {
            err.payment = "Required";
          }

          console.log(err);
          return err;
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <div className="w-screen flex flex-col items-center ">
            <h3 className="bg-green-500 mt-5 px-20 py-3 text-white font-bold rounded">
              Payment Price: {price}
            </h3>
            <form
              className="md:w-[45%] m-5 bg-gray-200 p-5 rounded-md"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="floating_phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" "
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={values.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="checkin"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Checkin Date and Time
                </label>
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={values.checkin}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="payment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Payment Method
                </label>
                <select
                  id="payment"
                  name="payment"
                  onChange={handleChange}
                  value={values.payment}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    select one
                  </option>
                  <option value="bkash">Bkash</option>
                  <option value="nagad">Nagad</option>
                  <option value="rocket">Rocket</option>
                  <option value="bank">Bank Account</option>
                  <option value="card">Card</option>
                  <option value="coc">Cash on Checkin</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Booking Placed
              </button>
              <button
                type="submit"
                className="text-white mt-2 ml-5 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel Booking
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Confirm;
