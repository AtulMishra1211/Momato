import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import {lazy, Suspense} from "react";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const AppLayout =()=> {


   const [userName, setUserName] = useState();

   //authentication lets say
   useEffect(()=>{
    //make an api call and send username and password
    const data = {
        name:"Anant ",
    }
    setUserName(data.name);
   },[])


    return (
   //providing the redux store to our app, wrapping our entire app in Provider
    <Provider store = {appStore}>

    {/*This below is our app wrap in context --- nothing to do with redux/**/}
    <UserContext.Provider value = {{loggedInUser:userName, setUserName}}>
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>


    </Provider>
    );
    
}

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",     //separated by comma
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about", 
                element: <Suspense fallback={<h1>Yo about lazyloading!</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:
                <Suspense fallback={<h1>Yo lazy loading Grocery!</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />)