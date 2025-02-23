import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // react-router-dom library.
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {  // Root-level Component  // Component Composition

   const [userName, setUserName] = useState()

   // Authentication
   useEffect(()=>{
      // Make an API call and send Username & Password
      const data = {
         name : "Ankit Telase",
      };
      setUserName(data.name);
   }, [])


   return (
      <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser : userName, setUserName }}>
      <div className="app">
         <Header />
         <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
   )
}

const AppRouter = createBrowserRouter([

   {
      path : "/",
      element : <AppLayout />,
      children: [
         {
            path : "/",
            element : <Body />,

         },
         {
            path : "/About",
            element : <Suspense fallback={<h1>Loading...</h1>}>
               <About />
            </Suspense>,
         },
         {
            path : "/Contact",
            element : <Suspense fallback={<h1>Loading...</h1>}>
               <Contact />
            </Suspense>,
         },
         {
            path : "/Grocery",
            element : <Suspense fallback={<h1>Loading...</h1>}>
               <Grocery />
               </Suspense>,
         },
         {
            path : "/Cart",
            element : <Suspense fallback={<h1>Loading...</h1>}>
               <Cart />
               </Suspense>,
         },
         {
            path : "/restaurants/:resId",
            element : <RestaurantMenu />,
         },
      ],
      errorElement : <Error />
   },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter} />)