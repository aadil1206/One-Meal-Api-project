import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css"

const Slider2 = ({items1}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: "linear"
  };
  return (
    <div className='sli' >
    <Slider {...settings} className='s23' >
    
      {
items1.map((item)=>{
  const {image}=item?.recipe
  return (
  <img src={image} alt="h" className='s2' />)
})
      }
    
    </Slider>
  </div>
);
}


export default Slider2
