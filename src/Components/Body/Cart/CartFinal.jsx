import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartFinal = () => {
  const selector = useSelector((state) => state);
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
    window.location.reload();
  };
  const Confirm = () => {
    navigate("/confirm");
  };
  return (
    <div className="block md:flex flex-col items-center m-5">
      {selector.Products.item.map((item, index) => {
        return (
          <ul key={index} className="bg-gray-200 w-[25%] p-5 rounded-lg">
            <li>Rooms: {item.room}</li>
            <li>Bed: {item.amount}</li>
            <li>Day: {item.day}</li>
            <li>Total Price: {item.price}</li>
          </ul>
        );
      })}
      <div>
        <button
          className="bg-green-500 px-4 py-2 rounded-xl text-white font-bold mt-4 hover:bg-green-400 hover:text-black"
          onClick={Confirm}
        >
          Confirm Booking
        </button>
        <button
          className="bg-red-500 px-4 py-2 ml-4 rounded-xl text-white font-bold mt-4 hover:bg-red-700"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CartFinal;
