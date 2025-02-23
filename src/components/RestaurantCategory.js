import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(null)

  const handleClick = () => {
    // showItems ? setShowItems(false) : setShowItems(true);
    // setShowItems(!showItems)
    setShowIndex();
  }
  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-6">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
      <span>🔽</span>
    </div>

    {/* when showItems is true then show the itemCards*/}
    {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
