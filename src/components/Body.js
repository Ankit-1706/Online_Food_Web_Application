import RestaurantCard, { withLabelPromoted } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  // state variable - Super powerful React variable --> useState()
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const [searchText, setSearchText] = useState("");
  // console.log("Body render", listOfRestaurants);

  const RestaurantCardPromoted = withLabelPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"
    ); // Here i fetched swiggy api.

    const json = await data.json(); // Convert the data to json.

    console.log(json);
    // console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    // setListOfRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants); //Failed to load resource.//**//
  };

  // if(listOfRestaurants.length===0){
  //    return <h1> Loading... </h1>;
  // } // for loading... between page is getting load and till the data (UI) displays.

  // if(listOfRestaurants.length===0){ // This concept is known as Conditional Rendering.
  //    return <Shimmer />;
  // } // Shimmer UI :- Offen used when webpage is Loading.

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection...
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black border-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 m-4 bg-green-200 hover:bg-green-300 rounded-md"
            onClick={() => {
              // Filter the res-cards and update the UI. (means change/update state variable).
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            onClick={() => {
              // filter logic for listOfRestaurants whose avg rating >= 4.5
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating >= 4.5;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className=" search m-4 p-4 flex items-center">
          <label className="p-2">UserName : </label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {/* <RestaurantCard resData = {resList[0]} />  */}
        {listOfRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            {/*if a restaurant is promoted then add promoted label to it.*/}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link> //Here key={index} you can use as a restaurant id key={restaurant.info.id}
        ))}
      </div>
    </div>
  );
};

export default Body;
