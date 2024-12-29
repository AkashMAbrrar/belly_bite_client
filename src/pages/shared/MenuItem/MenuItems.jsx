import React from "react";

const MenuItems = ({ item }) => {
  const { name, image, category, price, recipe } = item;
  console.table(item);

  return (
    <div className="flex space-x-4 bg-gray-100 p-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[110px]"
        src={image}
        alt=""
      />

      <div>
        <h3 className="uppercase">{name}-------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 font-bold">$:{price}</p>
    </div>
  );
};

export default MenuItems;
