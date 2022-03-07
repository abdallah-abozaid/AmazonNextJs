import React from "react";
import Image from "next/image";
import Link from "next/link";
import amazoneLOGO from "/public/images/Amazon_logo_PNG3.png";
const Footer = () => {
  return (
    <div className="bg-amzaon mt-36 text-[#fff]">
      <div className="basis-6/12 md:basis-4/12 flex items-center p-2 place-content-center ">
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
    </div>
  );
};

export default Footer;
