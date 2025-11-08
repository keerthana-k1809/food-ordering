import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   const[text,setText]=useState("login");

  
  return (
    <div className='flex justify-between border  border-solid-black bg-pink-100 '>
      
        <div>
          <img className='w-20' src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"/>

        </div>
        <div className='flex items-center'>
             <ul className='flex p-4 m-4'>
               <li className='px-4'><Link to ="/">Home</Link></li>
                <li className="px-4"><Link to="/contactus">ContactUs</Link></li>
                 <li className='px-4'><Link to="/about">About</Link></li>
                 <li className='px-4'>cart</li>
                 
                    
                </ul>
                <button onClick={()=>{
                  text==="login"?setText("logout"):setText("login");
                }}>{text}</button>
              
             </div>
             
         </div>
  )
}

export default Header