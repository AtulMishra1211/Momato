import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/mockData";

import resArr from "../utils/mockData";




const Body =()=>{
    const[listOfRestaurants, setListOfRestaurants]= useState(resArr)

  

    return(
        <div className="body">
            <div className="filter">
            <button 
            className="filter-btn"
            onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.0
                )
                setListOfRestaurants(filteredList);
                }}
            >
                Top Rated Restaurants
            </button>
            </div>
            <div className="res-container">
            {/* we are using map below for looping through */}
            {listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                ))}
            
            </div>
        </div>
    )
}

export default Body;