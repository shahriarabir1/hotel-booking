import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPriceData } from "../../../Redux/reducer";
const Cart = () => {
  const [amount, setAmount] = useState(1);
  const [room, setRoom] = useState(1);
  const [day, setDay] = useState(1);
  let price = (499 * room + 100 * amount) * day;
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(
      setPriceData({
        amount: amount,
        room: room,
        day: day,
        price: price,
      })
    );
  };
  return (
    <div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          CCA Hotel and Ressort
        </h5>
        <ul>
          <li>
            Room:{" "}
            <button
              className="ml-5 mr-5"
              onClick={() => {
                setRoom(room > 1 ? room - 1 : 1);
              }}
            >
              <AiFillMinusCircle />
            </button>
            {room}
            <button
              className="ml-5"
              onClick={() => {
                setRoom(room + 1);
              }}
            >
              <BsPlusCircleFill />
            </button>
          </li>
          <li>
            Bed:{" "}
            <button
              className="ml-9 mr-5"
              onClick={() => {
                setAmount(amount > 1 ? amount - 1 : 1);
              }}
            >
              <AiFillMinusCircle />
            </button>
            {amount}
            <button
              className="ml-5"
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              <BsPlusCircleFill />
            </button>
          </li>
          <li>
            Day:{" "}
            <button
              className="ml-9 mr-5"
              onClick={() => {
                setDay(day > 1 ? day - 1 : 1);
              }}
            >
              <AiFillMinusCircle />
            </button>
            {day}
            <button
              className="ml-5"
              onClick={() => {
                setDay(day + 1);
              }}
            >
              <BsPlusCircleFill />
            </button>
          </li>
          <li className="text-lg font-bold bg-gray-200 p-2">Price: {price}</li>
          <Link to="/cart">
            <button
              onClick={submit}
              className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 mt-5"
            >
              Done
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
