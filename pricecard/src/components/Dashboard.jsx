import React from 'react';

const Dashboard = ({name,price,date,offer , option,classall}) => {
  return (
    <div>
      <div className={classall}>

        {/* Ribbon */}
        <div className="absolute top-4 w-full h-10 -left-3 bg-red-500 text-white px-6 py-1 rounded-tr-lg rounded-bl-lg font-semibold text-lg">
         {name}
        </div>

        {/* Price */}
        <div className="mt-10">
          <span className="text-red-500 text-4xl font-bold">INR{price}</span>
        </div>
        <p className="text-sm mt-1 font-semibold text-gray-700 tracking-wider">{date}</p>

        {/* Storage and User */}
        <p className="mt-2 font-bold text-sm text-black">{offer} USER</p>

        {/* Options */}
        <ul className="mt-4 space-y-1 text-gray-500 text-sm">
          <li>Option {option}</li>
          <li>Option two</li>
          <li>Option three</li>
          <li>Option four</li>
          <li>Option five</li>
          <li>Option six</li>
        </ul>

        {/* Button */}
        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
