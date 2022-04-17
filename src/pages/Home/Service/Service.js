import React from "react";

const Service = (props) => {
  const { name, img, description, price } = props.service;
  return (
    <div className="shadow-lg bg-white rounded overflow-hidden">
      <div className="">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{description}</p>
        <p>price : ${price}</p>
      </div>
      <div>
        <button className="w-full bg-green-700">Book Appoinment</button>
      </div>
    </div>
  );
};

export default Service;
