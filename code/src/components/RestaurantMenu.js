import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //how to read a dynamic URL params.
  const { resId } = useParams();

  //custom hook call
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-8">
      <div>
        <h1 className="font-bold text-xl">Restaurant id: {resId}</h1>
        <h2 className="font-bold py-4  text-xl">{restaurant?.name}</h2>
        <img
          className="shadow-md w-96"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <h3 className="my-2">{restaurant?.area}</h3>
        <h3 className="my-2">{restaurant?.city}</h3>
        <h3 className="my-2">{restaurant?.avgRating}</h3>
        <h3 className="my-2">{restaurant?.costForTwoMsg}</h3>
      </div>
      <div
        className="mx-12
      "
      >
        <h1 className="font-bold text-xl">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
