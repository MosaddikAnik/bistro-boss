import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="flex gap-x-6 ">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[104px] "
          src={image}
          alt=""
        />
        <div>
          <h3 className="text-amber-600">------------ {name}</h3>
          <p>{recipe}</p>
        </div>
        <div>
          <p className="text-amber-500">${price}</p>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default MenuItem;
