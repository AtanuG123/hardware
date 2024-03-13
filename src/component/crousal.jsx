// import { Component, useState } from "react";
import "./crousal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import img1 from "../assets/sale1.jpg";
import img2 from "../assets/sale2.jpg";
import img3 from "../assets/sale3.jpg";
import img4 from "../assets/ad.jpg";
export default function Crousal() {
  const images=[img1,img2,img3,img4]
  
  const settings = {
    infinite: true,
    dots: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // lazyLoad: true,
    slidecount:Infinity,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    
  };
  return (
    <>
      <div className="slider-wrapper">
      
        <Slider {...settings}>
          {images.map((slide) => (
            <div className="slick-slide" >
            {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
            <img className="slick-slide-image" alt="photo" src={slide} />
            {/* <label className="slick-slide-label">{slide.label}</label> */}
          </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
