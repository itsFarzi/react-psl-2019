import React, { Component } from 'react';
import Slider from 'react-slick'

const settings = {
    arrows : false ,
    dots : false ,
    infinite : true ,
    speed : 500 ,
    slidesToShow : 1 ,
    slidesToScroll : 1
}

const  generateSlider=({slides})=>{
    if(slides){
       return(
           <Slider {...settings}>
               {slides.map(
                   (item)=>{
               return (
                   <div>
                  <div 
               style={{background: `url(./images/covers/${item.cover})`}}
                key={item.id}
                className="item-slider"
                >
               <div className="caption"  >
                   <h4>{item.topic}</h4>
                   <p>{item.title}</p>
               </div>
              </div>
                   </div>
                    )
                }
                )
                }
           </Slider>
       )
    }
   }

const Slides=(props)=>{
   return(
       <div>
          {generateSlider(props)}
       </div>
   )
}

export default Slides;