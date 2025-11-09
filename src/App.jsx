import Restaurantcard from "./components/RestaurantCard"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"



   



function AppLayout() {
  

  return (
    <>
      <div>
  
      </div>
      <Header />
      <Outlet/>
       
     
    
    </>
  )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contactus",
                element:<ContactUs />
            },
            
            
            
        ],
        
        
        
    }
],{
  basename:"/food-ordering",
})

function App(){
  return  <RouterProvider router={appRouter}/>
}


export default App
