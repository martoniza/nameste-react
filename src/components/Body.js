import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const arr = useState(resArray);
  const [listOfRestaurants, setListOfRestaurant] = arr;
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.avRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
