import{CDN_URL} from "../utils/constants"; 
const RestaurantCard =(props)=>{
    const {resData} = props;

    const {name, cuisines, locality, areaName, avgRating,cloudinaryImageId} = resData?.info;     //why '?' -> optional chaining
    const{deliveryTime} = resData?.info.sla;
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL +cloudinaryImageId} ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{locality}, {areaName}</h4>
            <h4>{avgRating} Star </h4>
        </div>
    )
}  

export default RestaurantCard;