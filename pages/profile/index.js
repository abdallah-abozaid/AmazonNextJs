import React from "react";
import Image from "next/image";
import profile from "../../public/images/me.jpg";
import { useState } from "react";
const Profile = () => {
  const [desabled, setdisabled] = useState(true);
  return (
    <div className="bg-[#deedff]">
      <div className="container mx-auto px-3 py-10">
        <div className="imgProfile mx-auto  mb-10 text-center relative">
          <Image
            src={profile}
            width={150}
            height={150}
            className="rounded-full"
            alt="profile image"
          />
          <button className="bg-[#232f3e86] hover:bg-[#232f3eef] px-4 py-1 rounded-lg text-white absolute bottom-1 left-[55%] text-sm">
            Edite
          </button>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  gap-9 px-10 ">
          <div className="inputGroup">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              <span className="w-[2px] h-5 bg-[#232F3E] inline-block translate-y-1 mr-1"></span>
              Name:
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Abdallah Abu zaid"
              className="p-3 w-full rounded-md disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-[#666666]"
              disabled={desabled}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="Age" className="block mb-2 text-sm font-medium">
              <span className="w-[2px] h-5 bg-[#232F3E] inline-block translate-y-1 mr-1"></span>
              Age
            </label>
            <input
              type="text"
              id="Age"
              defaultValue="23"
              className="p-3 w-full rounded-md disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-[#666666]"
              disabled={desabled}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="Email" className="block mb-2 text-sm font-medium">
              <span className="w-[2px] h-5 bg-[#232F3E] inline-block translate-y-1 mr-1"></span>
              Email
            </label>
            <input
              type="text"
              id="Email"
              defaultValue="abood.sa.10@gmail.com"
              className="p-3 w-full rounded-md disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-[#666666]"
              disabled={desabled}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              <span className="w-[2px] h-5 bg-[#232F3E] inline-block translate-y-1 mr-1"></span>
              Phone
            </label>
            <input
              type="text"
              id="phone"
              defaultValue="0599197739"
              className="p-3 w-full rounded-md disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-[#666666]"
              disabled={desabled}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="Address" className="block mb-2 text-sm font-medium">
              <span className="w-[2px] h-5 bg-[#232F3E] inline-block translate-y-1 mr-1"></span>
              Address
            </label>
            <input
              type="text"
              id="Address"
              defaultValue="Palistenein"
              className="p-3 w-full rounded-md disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-[#666666]"
              disabled={desabled}
            />
          </div>
        </div>

        <div className="px-10 mt-10">
          {desabled && (
            <button
              className="bg-[#131921] px-12 py-2 text-white rounded-lg"
              onClick={() => {
                setdisabled(false);
              }}
            >
              Edite{" "}
            </button>
          )}
          {!desabled && (
            <button
              className="bg-[#131921] px-12 py-2 text-white rounded-lg"
              onClick={() => {
                setdisabled(true);
              }}
            >
              save{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
