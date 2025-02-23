import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {

  const dispatch = useDispatch();

  const handleAddItems = (items) => {
    // Dispatch an action
    dispatch(addItem(items));
  }


  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span className="font-medium">{items.card.info.name}</span>
              <span className="font-medium">
                {" "}
                ₹ - {items.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute">
              <button className="p-1 mx-4 mt-14 rounded-md shadow-lg bg-white font-medium" onClick={() => handleAddItems(items)}>
                Add +
              </button>
            </div>
            <img src={CDN_URL + items.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
