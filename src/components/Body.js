import { useState } from "react";
import {useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";






const Body =()=>{
    const[listOfRestaurants, setListOfRestaurants]= useState([]);
    const[filteredRestaurants, setFilteredRestaurants]= useState([]);
   const[searchText, setSearchText]= useState("")
//wheneveer a state variable is updated, react re renders the component(triggers the reconciliation cycle)
   console.log("body rendered")


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.753400661527206&lng=83.40206321328877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            
            console.log(json);
            setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurants.length===0 ?(
     <Shimmer/>
  ): (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button onClick={()=>{
                  console.log({searchText})
                  const filteredRestaurants = listOfRestaurants.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
              </div>
            <button   
            className="filter-btn"
            onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.0
                )
                setFilteredRestaurants(filteredList);
                }}
            >
                Top Rated Restaurants
            </button>
            </div>
            <div className="res-container">
            {/* we are using map below for looping through */}
            {filteredRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                ))}
            
            </div>
        </div>
    )
}

export default Body;