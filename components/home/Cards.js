import React from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import imagebanners from "../../public/images/banneritems.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Action1 } from "../../Store/index";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const FirstCards = (props) => {
  const Items = useSelector((state) => state.Items);
  const dispatch = useDispatch();
  const add_Item_To_Card = (item) => {
    dispatch(Action1.add_Item_To_Card(item));
  };
  return (
    <>
      <div className="container mx-auto px-3 ">
        {props.products.length == 0 && (
          <>
            <div className="bg-white translate-x-110 mt-20 text-[30px] w-full text-center font-bold">
              no Items Equal Your Search Title!!
            </div>
            <div className="bg-white mt-5 text-gray-600 text-[15px] w-full mb-36 text-center font-bold">
              pLease Enter Similer Title to find it!
            </div>
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-20 md:gap-9 md:-translate-y-24 translate-y-10 px-4">
          {props.products.slice(0, 4).map((item) => (
            <div
              key={item.title}
              className="bg-white p-5 relative rounded-md shadow-xl shadow-grey-500/50 hover:scale-105 ease-linear duration-300 cursor-pointer "
            >
              <p className="absolute top-1 right-1 text-xs text-[grey]">
                Amazon products
              </p>
              <div className="imag w-[70%] h-[180px] relative mx-auto mt-4">
                <Image src={item.image} alt="clothe img" layout="fill" />
              </div>
              <p className="font-semibold mt-4">{item.title}</p>
              <p className="my-1">
                {[...Array(Math.round(item.rating.rate))].map((i) => (
                  <AiTwotoneStar
                    className="text-[#F8BB47] inline"
                    key={Math.random()}
                  />
                ))}
              </p>
              <p className="text-sm text-[#646464]">
                {item.description.slice(0, 100)} ...
              </p>
              <p className="font-semibold mt-2">$ {item.price}</p>
              {!Items.find((Item) => {
                return Item.id == item.id;
              }) && (
                <button
                  onClick={() => {
                    add_Item_To_Card(item);
                  }}
                  className="focus:no-underline bg-gradient-to-b from-[#F8BB47] to-[#F8BB47] w-full h-10 text-white mt-3"
                >
                  Add to Card <MdOutlineAddShoppingCart className="inline" />
                </button>
              )}
              {Items.find((Item) => {
                return Item.id == item.id;
              }) && (
                <button className=" focus:from-[#232F3E]  cursor-no-drop focus:no-underline bg-gradient-to-b from-[#232F3E] to-[#232F3E] w-full h-10 text-white mt-3">
                  Added <IoMdDoneAll className="inline" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[100%] h-[180px] relative mx-auto my-8 translate-y-10 md:-translate-y-10">
        <Image src={imagebanners} alt="clothe img" layout="fill" />
      </div>
      <div className="container mx-auto px-3 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-9  translate-y-10 px-4">
          {props.products.slice(4).map((item) => (
            <div
              key={item.title}
              className="bg-white p-5 relative rounded-md shadow-xl shadow-grey-500/50 hover:scale-105 ease-linear duration-300 cursor-pointer "
            >
              <p className="absolute top-1 right-1 text-xs text-[grey]">
                Amazon products
              </p>
              <div className="imag w-[70%] h-[180px] relative mx-auto mt-4">
                <Image src={item.image} alt="clothe img" layout="fill" />
              </div>
              <p className="font-semibold mt-4">{item.title}</p>
              <p className="my-1">
                {[...Array(Math.round(item.rating.rate))].map((i) => (
                  <AiTwotoneStar
                    className="text-[#F8BB47] inline"
                    key={Math.random()}
                  />
                ))}
              </p>
              <p className="text-sm text-[#646464]">
                {item.description.slice(0, 100)} ...
              </p>
              <p className="font-semibold mt-2">$ {item.price}</p>
              {!Items.find((Item) => {
                return Item.id == item.id;
              }) && (
                <button
                  onClick={() => {
                    add_Item_To_Card(item);
                  }}
                  className=" focus:no-underline bg-gradient-to-b from-[#F8BB47] to-[#F8BB47] w-full h-10 text-white mt-3"
                >
                  Add to Card <MdOutlineAddShoppingCart className="inline" />
                </button>
              )}
              {Items.find((Item) => {
                return Item.id == item.id;
              }) && (
                <button className="focus:from-[#232F3E] cursor-no-drop focus:no-underline bg-gradient-to-b from-[#232F3E] to-[#232F3E] w-full h-10 text-white mt-3">
                  Added <IoMdDoneAll className="inline" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstCards;
