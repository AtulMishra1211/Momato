
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu =()=>{
    

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async()=>{
    //     const data = await fetch (MENU_API+resId);
        
    //     const json = await data.json();
    //     console.log(json);
    //     setResinfo(json.data);
        
    // }
    if(resInfo === null) return <Shimmer/>

   const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage} 
            </p>
            
            <ul>
                <h2>Menu</h2>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li> )}
                
                
            </ul>

        </div>
    )
}

export default RestaurantMenu;