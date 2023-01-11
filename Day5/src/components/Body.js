import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState(""); // To create state variable
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchClicked) {
              //filter data
              const data = filterData(searchText, restaurantList);
              // update the state - restaurants
              setRestaurants(data);
              //   setSearchClicked(true);
            } else if (!searchClicked) {
              //filter data
              const data = filterData(searchText, restaurants);
              // update the state - restaurants
              setRestaurants(data);
              setSearchClicked(true);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
