import React from "react";
import Image from "next/image";
import img from "../../public/images/banneritems.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { GoSignIn } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import img2 from "../../public/images/noItems.svg";
import { Action1 } from "../../Store/index";
import { useRouter } from "next/router";

const Checkout = () => {
  const Router = useRouter();
  const Items = useSelector((state) => state.Items);
  const dispatch = useDispatch();
  const Remove_Item_from_Basket = (item) => {
    dispatch(Action1.Remove_Item_from_Basket(item));
  };
  const Remove_All_Item_from_Basket = () => {
    dispatch(Action1.Remove_All_Item_from_Basket());
  };
  const increase_qunatity_of_item = (id) => {
    dispatch(Action1.increase_qunatity_of_item(id));
  };
  const Dedcrease_qunatity_of_item = (id) => {
    dispatch(Action1.Dedcrease_qunatity_of_item(id));
  };
  return (
    <main className="bg-[#deedff]  p-3 pt-10 md-10 ">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-9">
          <div className="col-span-3 bg-white p-2 pt-5 rounded-md">
            <div className=" w-[100%] md:w-[90%] h-[180px] relative">
              <Image src={img} layout="fill" alt="banner image" />
            </div>
            <div className="mt-5">
              <p className="font-semibold text-[23px] italic ml-10 mb-2">
                Shopping Basket
              </p>
              <hr className="mb-10 w-[90%] mx-auto" />
            </div>
            <div className="Items mx-4 md:mx-8">
              {Items.length == 0 && (
                <div className="flex flex-row">
                  <div className="basis-12/12 md:basis-4/12 relative h-36">
                    <Image src={img2} layout="fill" alt="item image" />
                  </div>
                  <div className="basis-12/12 md:basis-8/12 flex items-center">
                    <div className="text-lg font-bold italic ">
                      Your Amazon Card Empty!!
                      <p
                        onClick={() => {
                          Router.push("/");
                        }}
                        className="hover:underline cursor-pointer text-sm text-yellow-600"
                      >
                        Click Here To Go Home Page
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {Items.length > 0 &&
                Items.map((item) => (
                  <div
                    key={Math.random()}
                    className="Item grid grid-cols-9 gap-1 border-2 p-2 rounded-md mb-5"
                  >
                    <div className="col-span-3 md:col-span-2 flex items-center">
                      <div className="imag w-[70%] h-[150px]  relative mx-auto ">
                        <Image
                          src={item.image}
                          layout="fill"
                          alt="item image"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-5 pt-3 md:pt-5">
                      <p className="font-semibold text-sm md:text-lg">
                        {item.title}
                      </p>
                      <p>
                        {[...Array(Math.round(item.rating.rate))].map((i) => (
                          <AiTwotoneStar
                            className="text-[#F8BB47] inline"
                            key={Math.random()}
                          />
                        ))}
                      </p>
                      <p className="text-xs md:text-sm text-[#646464] md:pr-5">
                        {item.description}
                      </p>
                      <div>
                        <p className="font-semibold mt-1 mb-5">
                          <span className="text-sm text-neutral-900 italic">
                            price:
                          </span>
                          <span className="text-md text-yellow-700">
                            ${item.price * item.amount}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-span-9 md:col-span-2 pt-3 md:pt-5 flex items-center ">
                      <div className="flex flex-col w-full">
                        <div className="grid grid-cols-3 gap-1">
                          <button
                            onClick={() => {
                              increase_qunatity_of_item(item.id);
                            }}
                            className=" text-md md:text-md px-4 py-2 focus:from-[#f7b02c] focus:no-underline bg-gradient-to-b from-[#f7c872] to-[#F8BB47] w-full   text-white mt-1"
                          >
                            +
                          </button>
                          <button className=" text-md md:text-md px-4 py-2 cursor-none focus:no-underline bg-gradient-to-b from-[#fff] to-[#fff] w-full   text-black mt-1">
                            {item.amount}
                          </button>
                          <button
                            onClick={() => {
                              Dedcrease_qunatity_of_item(item.id);
                            }}
                            className=" text-md md:text-md px-4 py-2 focus:from-[#f7b02c] focus:no-underline bg-gradient-to-b from-[#f7c872] to-[#F8BB47] w-full   text-white mt-1"
                          >
                            -
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            Remove_Item_from_Basket(item.id);
                          }}
                          className=" text-xs md:text-sm px-4 py-2 focus:from-[#f7b02c] focus:no-underline bg-gradient-to-b from-[#f7c872] to-[#F8BB47] w-full   text-white mt-1"
                        >
                          Remove From Basket{" "}
                          <MdOutlineRemoveShoppingCart className="inline" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-white p-2 pt-5 rounded-md col-span-3 md:col-span-1 mb-5 ">
            <p className="font-semibold text-[19px] italic ml-10 mb-2">
              <span>
                <span className="text-sm text-yellow-700">selected :</span>{" "}
                {Items.reduce((curr, item) => {
                  return curr + 1 * item.amount;
                }, 0)}
                <span className="text-sm text-yellow-700"> Items</span>
              </span>
              <br />
              <span>
                <span className="text-sm text-yellow-700"> price :</span>
                {Items.reduce((curr, item) => {
                  return curr + item.price * item.amount;
                }, 0)}
                <span className="text-sm text-yellow-700"> $</span>
              </span>
            </p>

            {Items.length > 0 && (
              <button
                onClick={() => {
                  Remove_All_Item_from_Basket();
                }}
                className="rounded-sm focus:no-underline bg-[#232F3E] w-full h-11 text-white mt-1"
              >
                Clear Basket
              </button>
            )}
            <button className="rounded-sm focus:no-underline bg-[#232F3E] w-full h-11 text-white mt-1">
              SignIn To Checkout <GoSignIn className="inline" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
