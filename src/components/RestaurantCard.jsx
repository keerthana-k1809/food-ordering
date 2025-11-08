import React from 'react'
import resList from './utils/reslist';


const RestaurantCard = (props) => {
    // const{name,cuisines,avgRating,minutes}=props;
  const {resData}=props;
  const{
     cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
     sla,
  }=resData?.info;
  
  return (
    <div className='  p-4 m-10 bg-slate-200 w-[250px] rounded-lg ' >
    <img className='w-[200px] pl-5 rounded-lg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+cloudinaryImageId}/>
    <h3 className='p-1 font-bold'>{name}</h3>
    <h4  className='p-1'>{cuisines .join(" , ")}</h4>
    <h4  className='p-1'>{avgRating}</h4>
    <h4  className='p-1'>{costForTwo}</h4>
    <h4  className='p-1'>{sla.deliveryTime} minutes</h4> 
      
    </div>
  )
}

export default RestaurantCard