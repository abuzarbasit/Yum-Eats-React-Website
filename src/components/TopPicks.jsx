import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {topPicks} from '../data/data.js'

const TopPicks=()=>{
 return(<>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
    <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>
        
        <Splide options={ { rewind: true,perPage:4, gap:"0.5rem",drag:'free', arrows:false } } aria-label="React Splide Example">

      
      {topPicks.map((item)=>{
            return(
                <SplideSlide key={item.id}>
                <div className='rounded-3xl relative'>
  
  <div className='absolute w-full h-full bg-black bg-opacity-50 rounded-3xl text-black'>
    <p className='px-2  font-bold text-2xl pt-4 text-white'>{item.title}</p>
    <p className='text-white font-semibold px-2'>{item.price}</p>
    <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Card</button>
  </div>
  <img className="rounded-3xl h-[200px] w-full object-cover cursor-pointer hover:scale-105 ease-out duration-300" src={item.img} alt={item.title} />
</div>

                </SplideSlide>
            )
        })}
    </Splide>
    </div>
 </>)   ;
}
export default TopPicks