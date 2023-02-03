import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-[200px] p-2 m-2 shadow-xl bg-zinc-100 h-[350px]">
      <img
        className="py-1"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.slice(0, 3).join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
