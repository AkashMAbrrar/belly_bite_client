import React from "react";

const FoodCards = ({ item }) => {
  const { name, image, category, price, recipe } = item;

  return (
    <div className="card bg-base-200 h-[541px]  shadow-xl rounded-none">
      <figure>
        <img src={image} alt="foods" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 p-1 rounded-md bg-slate-900 text-white font-semibold">
        Price $:{price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Recipe: {recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline text-orange-500 border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
