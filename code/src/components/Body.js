import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { FETCH_RESTAURANT_URL } from "../constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // To create state variable

  const { user, setUser } = useContext(UserContext);
  // empty dependency array => once after render
  // dependency array[searchText] => once after initial render + everytime after rerender(my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = await data.json();
    //Optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> 🔴 Offline, please check your internet connection!!</h1>;
  }

  // Avoid rendering a component (we can use optional chaining or use this to handle it property)
  if (!allRestaurants) return null; // Component won't render or we can also render some jsx - this is known as early return (not render component)

  // Conditional rendering
  // If restaurant is empty => shimmer UI
  //if restaurant has data => actual data UI
  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 my-5 mx-24">
        <input
          type="text"
          className="border-2 border-zinc-600 shadow-lg rounded-md focus:bg-violet-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-500 text-white rounded-md hover:bg-violet-600"
          onClick={() => {
            //filter data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredRestaurants.map((restaurant) => {
          {
            /**Shimmer should be loaded here */
          }
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
