import React from "react";
import Image from "next/image";
import amazoneLOGO from "/public/images/Amazon_logo_PNG3.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Action1 } from "../../Store/index";
import Link from "next/link";
const FstNavbar = () => {
  const Items = useSelector((state) => state.Items);
  const SearchText = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const searchhandler = (e) => {
    dispatch(Action1.Set_search_text(e.target.value));
  };
  return (
    <div className="First-Nav bg-amzaon flex flex-row text-center text-white p-1 py-2  items-center">
      {/* logo */}
      <div className="basis-4/12 md:basis-2/12 flex items-center place-content-center ">
        <Link href="/">
          <a>
            <Image
              src={amazoneLOGO}
              width={100}
              height={38}
              objectFit="conttain"
              className="cursor-pointer translate-y-1"
              alt="amazone logo"
            />
          </a>
        </Link>
      </div>
      {/* input */}
      <div className="basis-8/12 hidden h-9 md:flex">
        <input
          defaultValue={SearchText}
          type="text"
          onChange={searchhandler}
          className="bg-white w-[95%] p-2 placeholder:italic placeholder:text-slate-400 placeholder:text-sm rounded-l-md text-black"
          placeholder="Whate you Need!"
        />
        <button className="bg-[#F8BB47] hover:bg-[#eea215] w-[5%] rounded-r-lg flex place-content-center  items-center text-black">
          <AiOutlineSearch />
        </button>
      </div>
      {/* account and list */}
      <div className="basis-4/12 h-8 md:basis-2/12 ">
        <Link href="/profile">
          <a>
            <p className="text-xs mb-0 text-zinc-300">Hello, Abdallah!</p>
            <p className="text-sm mt-[-3px]">Account & List</p>
          </a>
        </Link>
      </div>

      {/* card */}
      <div className="basis-4/12 h-8 md:basis-2/12 flex place-content-center  items-center">
        <Link href="/checkout">
          <a>
            <p className="mb-0">
              <span className="relative">
                <HiOutlineShoppingCart className="inline text-[30px]  " />
                <span className="absolute top-[-8px] italic right-[-2px] p-1 text-black bg-[#F8BB47] rounded-full text-sm w-4 h-4 flex place-content-center  items-center">
                  {Items.length}
                </span>
              </span>
              <span className="text-[11px]">Basket</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FstNavbar;
