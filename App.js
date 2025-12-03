import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

/**
 * Header
 *  - Logo
 *  - Navigation items
 * Body
 *  - Search
 *  - Restaurant container
 *    - Restaurant card
 *      - Image
 *      - Name of Restaurant, Star Rating, Cuisine, Delivery Time, etc.
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const sytleCard = {
  backgroundColor: "#f0f0f0",
};

const resObject = {
  id: "1234",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75oqEsVn2OYLvdjAOnHbdhZcc_j3F9YSUcg&s",
  name: "KFC",
  cuisines: ["Burgers", "American", "Snacks", "Fast Food"],
  costForTwo: 40000,
  avRating: 4.4,
  deliveryTime: 36,
};

const resObject2 = {
  id: "2345",
  imgUrl:
    "https://img.freepik.com/photos-gratuite/vue-du-haut-table-pleine-nourriture_23-2149209253.jpg?semt=ais_hybrid&w=740&q=80",
  name: "Hungry Squirel",
  cuisines: ["Nuts", "Vegetables", "Snacks"],
  costForTwo: 30000,
  avRating: 4.1,
  deliveryTime: 40,
};

const resObject3 = {
  id: "3456",
  imgUrl:
    "https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",
  name: "Sanghai",
  cuisines: ["Chinese", "Asian", "Noodles"],
  costForTwo: 50000,
  avRating: 4.8,
  deliveryTime: 40,
};

const resArray = [resObject, resObject2, resObject3];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { imgUrl, name, cuisines, costForTwo, avRating, deliveryTime } =
    resData;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={imgUrl}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>HUF{costForTwo / 100} for 2 pers</h4>
      <h4>{avRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {resArray.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

console.log(resArray);
