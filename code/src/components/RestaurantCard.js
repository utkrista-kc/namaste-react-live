import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-xl bg-zinc-100 h-80">
      <img
        className="py-1"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
