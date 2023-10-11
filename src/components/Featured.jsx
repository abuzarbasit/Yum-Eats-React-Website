import React, { useState } from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight, } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';



const Featured=()=>{
    const sliders=[
        {
            url: '/images/burger_emxbtv.jpg'
          },
          {
            url: '/images/ric_a4ewxo.jpg'
          },
          {
            url: '/images/pexels-chan-walrus-958545.jpg',
          },
    ];
    const [currentIndex,setCurrentIndex] = useState(0);
    console.log(currentIndex);
    console.log(sliders.length);
    
   return (
  <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
     style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}>

    </div>
    <div onClick={()=>setCurrentIndex(currentIndex>0?currentIndex-1:sliders.length-1)} className='
    hidden 
    group-hover:block
    absolute top-[50%] -translate-x-0  
    translate-y-[-50%] left-5
    text-2xl rounded-full p-2 bg-orange-700 cursor-pointer
     
    '><BsChevronCompactLeft/></div>
    
    <div onClick={()=>setCurrentIndex(currentIndex<sliders.length-1?currentIndex+1:0)} 
    className='
    group-hover:block
    hidden absolute top-[50%] -translate-x-0  
    translate-y-[-50%] right-5
    text-2xl rounded-full p-2 bg-orange-700 cursor-pointer
     
    '><BsChevronCompactRight/></div>
    <div className='flex top-4 justify-center py-2'>
        {
            sliders.map((sliderItems,slideIndex)=>(<div 
            key={slideIndex}
            onClick={()=>setCurrentIndex(slideIndex)} className='text-2xl cursor-pointer'>
<RxDotFilled />
            </div>))
        }
    </div>
    
  



  </div>
);

}
export default Featured;