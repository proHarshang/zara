import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Tag from "../common/Tag";
import Logo from "../common/BrandLogo";

const Menu = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <button onClick={toggleMenu} className="h-fit text-3xl">
        {menuState ? <IoMdClose /> : <HiMenuAlt4 />}
      </button>
      {menuState && (
        <div className="h-[600px] min-w-[500px] z-50 border-2 border-black bg-white absolute left-7 top-[-10px]">
          <div className="h-[40%] w-full border-2 p-6 border-b-black">
            <Logo />
          </div>
          <div className="flex justify-end flex-col w-full p-5 gap-10">
            <div className="flex justify-end gap-7 text-black">
              <a href="#" className="bold">WOMEN</a>
              <a href="#">MAN</a>
              <a href="#">KIDS</a>
              <a href="#">BEAUTY</a>
            </div>
            <div id="tagsContainer" className="flex flex-col gap-5 overflow-y-scroll pr-5 h-64 items-end">
              <div id="tagsGroup" className="grid justify-items-end gap-2">
                <Tag>New</Tag>
              </div>
              <div id="tagsGroup" className="flex flex-wrap justify-end w-75 gap-2">
                <Tag>Newc</Tag>
                <Tag>New</Tag>
                <Tag>asdNew</Tag>
                <Tag>Newa</Tag>
                <Tag>New</Tag>
                <Tag>Neasw</Tag>
                <Tag>New</Tag>
                <Tag>Nesw</Tag>
                <Tag>New</Tag>
              </div>
              <div id="tagsGroup" className="flex flex-wrap justify-end w-75 gap-2">
                <Tag>Newc</Tag>
                <Tag>New</Tag>
                <Tag>asdNew</Tag>
                <Tag>Newa</Tag>
                <Tag>New</Tag>
              </div>
              <div id="tagsGroup" className="flex flex-wrap justify-end w-75 gap-2">
                <Tag>Newc</Tag>
                <Tag>New</Tag>
                <Tag>asdNew</Tag>
                <Tag>Newa</Tag>
                <Tag>New</Tag>
                <Tag>Neasw</Tag>
                <Tag>New</Tag>
                <Tag>Nesw</Tag>
                <Tag>New</Tag>
                <Tag>asdNew</Tag>
                <Tag>Newa</Tag>
                <Tag>New</Tag>
                <Tag>Neasw</Tag>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
