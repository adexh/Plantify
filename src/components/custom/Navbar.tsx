"use client";
import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

export default function () {
  const [show, setShowMenu] = useState(true);
  return (
    <>
      <div className="bg-black text-white border border-x-0 border-t-0 h-16 flex justify-between items-center">
        <div className=" flex gap-2 items-center p-4">
          <FaLeaf />
          Plantify
        </div>
        <div className="px-4">
          <IoMdMenu size={30} />
        </div>
      </div>
    </>
  );
}
