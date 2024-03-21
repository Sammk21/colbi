import Link from "next/link";
import React from "react";
import Magnetic from "../MagneticButtons/MagneticButtons";

const FooterLinks = ({ data }) => {
  const { href, title, index } = data;

  return (
    <Magnetic>
      <div
        key={index}
        className="flex items-center gap-2 group text-gray-600 hover:text-black "
      >
        <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-black  "></span>
        <Link className="" href={href}>
          {title}
        </Link>
      </div>
    </Magnetic>
  );
};

export default FooterLinks;
