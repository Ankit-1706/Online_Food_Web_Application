import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => { // create a separate Component which can be re-use.

   const{resData} = props;  // Destructuring the props.

   const {loggedInUser} = useContext(UserContext);
 
   const{name, cuisines, avgRating, costForTwo} = resData?.info; // Destructuring the props. (? is a Optional Chaining).
   const{deliveryTime} = resData?.info?.sla; // Destructuring the props. (? is a Optional Chaining).
 
   return (
      <div className="res-card m-2 p-2 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
          <img 
          className="res-logo w-[250px] h-[200px] rounded-lg" 
          alt="res-logo"
          src={CDN_URL+resData.info.cloudinaryImageId} // res-image URL
           />
 
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          <h4>{cuisines.join(" ,")}</h4>
          <h4>{avgRating} Star</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
          {/* <h4>User : {loggedInUser}</h4> */}
      </div>
   )
}

export default RestaurantCard

// Higher Order Component

// input - RestaurantCard ==>> output - RestaurantCardPromoted

export const withLabelPromoted = (RestaurantCard) => {
   return (props) => {
      return(
         <div>
            <label className="absolute bg-black text-white ml-2 rounded-md">Promoted</label>
            <RestaurantCard {...props} />
         </div>
      )
   }
}

