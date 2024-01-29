import React, { useState } from 'react';

/*
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import a from '../Images/featured/b3.jpg';
*/

const Featured = () => {

{/* 
    const [currentIndex, setCurrentInder]=useState(0);
    const prevSlider=()=>{
        const isFirstSlide= currentIndex===0;
        const newIndex= isFirstSlide? sliders.length-1 : currentIndex-1;
        setCurrentInder(newIndex);
    }

    const nextSlider=()=>{
        const lastSlide= currentIndex===sliders.length-1;
        const newIndex= lastSlide? 0 : currentIndex+1;
        setCurrentInder(newIndex);
    }
    const moveToNextSlide=(slideNext)=>{
        setCurrentInder(slideNext);
    }
    const sliders= [
          {
            id: 1,
            url: a,
          },
    ] */}

  return (
    <div className='slider-container'>
        {/*<img className='img' src={`${sliders[currentIndex].url}` }/>
        <div >
            <BsChevronCompactLeft className='Chevron-left' onClick={()=>prevSlider(currentIndex)}/>
            <BsChevronCompactRight className='Chevron-right' onClick={()=>nextSlider(currentIndex)}/>
        </div>
        <div className='slider-dots'>
        {sliders.map((sliderItem, sliderIndex) => (
          <div key={sliderIndex} onClick={() => moveToNextSlide(sliderIndex)}>
            <RxDotFilled />
          </div>
        ))}
        </div>*/}
    </div>
  )
}

export default Featured