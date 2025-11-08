
import RestaurantCard from './RestaurantCard'
import { useState,useEffect } from 'react';
import resList from './utils/reslist';


const Body = () => {
   const [listOfRestaurants,setListOfRestaurants]=useState([]);
   const [filteredRes,setFilteredRes]=useState([]);
   const [search,setSearch]=useState(""); 
  
   useEffect(()=>{
    fetchData();

   },[])
   const fetchData=async ()=>{
    const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1");
    const json=await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
   }
   
   return (
    <>
    <div>
      <input type='text' className='border border-radius-black' value={search}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}></input>
      <button className='bg-blue-100 p-1 px-2 m-4 rounded-lg'
      onClick={()=>{
        const filteredList=listOfRestaurants.filter((res)=>
        res.info.name.toLowerCase().includes(search.toLowerCase()));
        
        setFilteredRes(filteredList);
      }}>search</button>
        
      <button className='bg-green-100 p-2 m-4 pl-3 mx-20 rounded-lg'
      onClick={()=>{
        const filtertheList=listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
        setFilteredRes(filtertheList);
      }}
 

      >Top Rated Restaurant</button>
      
      
    </div>
  


    <div className='display flex flex-wrap'>
      
      {filteredRes.map((restaurant)=>(
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
      ))}

         



    </div>

    
    
  
  </>
  )
}

export default Body