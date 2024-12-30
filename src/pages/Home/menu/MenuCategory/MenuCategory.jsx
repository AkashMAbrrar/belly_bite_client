import React from "react";
import MenuItems from "../../../shared/MenuItem/MenuItems";
import Covered from "../../../shared/Covered/Covered";

const MenuCategory = ({ items, title, Img }) => {
  return (
    <div>
      {title && <Covered img={Img} title={title}></Covered>}
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
