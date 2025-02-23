import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo ] = useState(null);

  const { resId } = useParams();

  const dummy = "Dummy Data"

  const resInfo = useRestaurantMenu(resId); // custom Hook created separate component useRestaurantMenu inside utils.

  const [showIndex, setShowIndex] = useState(null);

  // useEffect(()=>{
  //     fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //     const data = await fetch( MENU_API + resId ); // I try to fetch dynamic data from swiggy.

  //     const json = await data.json(); // convert data into json.

  //     console.log(json);
  //     setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const ItemsCategory =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //   console.log(ItemsCategory);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl"> {name} </h1>
      <p className="font-bold text-lg">
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* ItemCategory accordions*/}
      {ItemsCategory.map((ItemsCategory, index) => {
        return (
          // Controlled component
          <RestaurantCategory
            key={ItemsCategory.card.card.title}
            data={ItemsCategory.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
