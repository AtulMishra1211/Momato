
// // import Shimmer from './Shimmer';
// // import { useParams } from 'react-router-dom';
// // import useRestaurantMenu from '../utils/useRestaurantMenu';


// const RestaurantMenu =()=>{
    

// //     const {resId} = useParams();
// //     const resInfo = useRestaurantMenu(resId);
//     // useEffect(()=>{
//     //     fetchMenu();
//     // },[])

//     // const fetchMenu = async()=>{
//     //     const data = await fetch (MENU_API+resId);
        
//     //     const json = await data.json();
//     //     console.log(json);
//     //     setResinfo(json.data);
        
//     // }
// //     if(resInfo === null) return <Shimmer/>

// //    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
// //     const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// //     console.log(itemCards);
//     return(
//         <div className="menu">
//             <p>Hello help</p>
//             {/* <h1>{name}</h1>
//             <p>
//                 {cuisines.join(", ")} - {costForTwoMessage} 
//             </p>
            
//             <ul>
//                 <h2>Menu</h2>
//                 {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li> )}
                
                
//             </ul> */}

//         </div>
//     )
// }

// export default RestaurantMenu;

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const restaurantCard = resInfo.cards.find(
    (card) => card?.card?.card?.info
  );

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

  const regularCard = resInfo.cards.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const categories =
    regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = categories.flatMap(
    (category) => category?.card?.card?.itemCards || []
  );

//   return (
//     <div className="menu">
//       <h1>{name}</h1>

//       <p>
//         {cuisines?.join(", ")} - {costForTwoMessage}
//       </p>

//       <h2>Menu</h2>

//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹
//             {(item.card.info.price ||
//               item.card.info.defaultPrice) / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

return (
    <div className="menu">

        <div className="menu-header">
            <h1>{name}</h1>

            <p>
                {cuisines?.join(", ")}
            </p>

            <p>{costForTwoMessage}</p>
        </div>

        <h2 className="menu-title">Recommended</h2>

        <ul className="menu-list">

            {itemCards.map((item) => (

                <li className="menu-item" key={item.card.info.id}>

                    <div className="item-left">

                        <h3>{item.card.info.name}</h3>

                        <p className="item-price">
                            ₹
                            {(item.card.info.price ||
                                item.card.info.defaultPrice) / 100}
                        </p>

                    </div>

                    <div className="item-right">

                        <button className="add-btn">
                            + ADD
                        </button>

                    </div>

                </li>

            ))}

        </ul>

    </div>
);

};

export default RestaurantMenu;