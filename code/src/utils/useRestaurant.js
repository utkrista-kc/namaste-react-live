import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  // get data from api
  // if resId changes, the data should also change so we use useEffect hook.
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  // return restaurant data
  return restaurant;
};

export default useRestaurant;
