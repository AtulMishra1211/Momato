// // import { useEffect, useState } from "react";
// // import { MENU_API } from "./constants";

// // const useRestaurantMenu=(resId)=>{
// // const [resInfo, setResInfo]=useState(null);
// // useEffect(()=>{
// // fetchData();
// // })

// // const fetchData = async()=>{
// //     const data = await fetch(MENU_API+resId);
// //     const json = await data.json();
// //     setResInfo(json.data);
// // };
// //     return resInfo;
// // };

// // export default useRestaurantMenu;

// import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []); // ✅ empty arrayz = run only once on mount

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://corsproxy.io/?" + encodeURIComponent(MENU_API + resId)
//     );
//     const json = await data.json();
//     console.log(json); // check the shape first!
//     setResInfo(json.data);
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;


import { useEffect, useState } from "react";
import mockMenus from "./mockData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (mockMenus[resId]) {
      setResInfo(mockMenus[resId].data);
    } else {
      console.error(`No mock menu found for restaurant id: ${resId}`);
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;