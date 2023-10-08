import React, { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid").trim();
  const [data, setData] = useState(null);
  const bookingData = async () => {
    const query = '&orderBy="uid"&equalTo"' + uid + '"';
    try {
      const response = await axios.get(
        "https://hotel-booking-8d336-default-rtdb.firebaseio.com/order.json?=auth=" +
          token +
          query
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    bookingData();
  }, []);
  let newData = { ...data };

  const n = Object.entries(newData);
  let final = null;
  if (Object.keys(newData).length !== 0) {
    final = (
      <div>
        {n.map((item, index) => {
          return (
            <div key={index} className="bg-gray-300 m-5 p-5">
              <ul className="m-5">
                <li className="font-bold">Order: {index + 1}</li>
                <li className="mb-3">Name: {item[1].name}</li>
                <li className="mb-3">Email: {item[1].email}</li>
                <li className="mb-3">Phone: {item[1].phone}</li>
                <li className="mb-3">Address: {item[1].address}</li>
                <li className="mb-3">Price: {item[1].price}</li>
                <li className="mb-3">Payment method: {item[1].payment}</li>
                <li className="mb-3">Check in date: {item[1].checkin}</li>
                <li className="mb-3">Booking date: {item[1].date}</li>
                <li className="mb-3">Message: {item[1].message}</li>
                <li className="mb-3 italic text-sm">User Id: {item[1].uid}</li>
              </ul>
              <h2 className="italic text-sm">Id: {item[0]}</h2>
            </div>
          );
        })}
      </div>
    );
  } else {
    final = (
      <div className="bg-gray-300 p-5 m-5">
        <h2>There is no permission to see the booking</h2>
      </div>
    );
  }

  return <div>{final}</div>;
};

export default Booking;
