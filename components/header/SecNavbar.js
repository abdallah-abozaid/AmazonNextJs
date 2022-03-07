import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const SecNavbar = () => {
  return (
    <div className="bg-amzaon-light text-white text-sm p-3">
      <ul className="list flex ">
        <li className="mx-2 link flex items-center">
          <AiOutlineMenu className="inline mx-1" /> <span>all</span>
        </li>
        <li className="mx-2 link">Prime Vedio</li>
        <li className="mx-2 link">Amazon Dusmess</li>
        <li className="mx-2 link">Tody Deals</li>
        <li className="mx-2 link hidden md:inline">Food & Drinks</li>
        <li className="mx-2 link hidden md:inline">Prime</li>
        <li className="mx-2 link hidden md:inline">Buy Again</li>
        <li className="mx-2 link hidden md:inline">Shooper Toolkit</li>
        <li className="mx-2 link hidden md:inline">Healthy & personal care</li>
      </ul>
    </div>
  );
};

export default SecNavbar;
