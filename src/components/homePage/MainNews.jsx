import {  Box, Typography, Stack, Button, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom';

import theme from '../../css/theme';


import '../../css/MainNewsCss.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from '../../modules/MainHeadline/Slide';

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import Slider from 'react-slick';


const MainNews = () => {

  let articles = useSelector((state) => state.articles)
  articles = articles && articles[0] ? articles[0]: '';
  let headline = articles && articles[0] ? articles.filter(item => item.headline == 'Yes' && item.league == 'DFA'): '';


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Adjust the speed (in milliseconds) as needed
    cssEase: 'cubic-bezier(.76,.49,.72,.66)',

  };



  // const [headline, setHeadline] = useState(slides)
  const [newsCounter, setNewsCounter] = useState(0)


  // useEffect(()=>{ 

  //   const intervalId = setInterval(()=> {

    
  //     setNewsCounter((prevCount) => {

  //       if(prevCount < headline.length-1){return prevCount + 1}
  //       else{return 0}
  //     })
      
  //   }, 4000)

  //   // Clean up the interval when components unmounts
  //   return () => clearInterval(intervalId)
  // }, [])





  return (

    <div >
      {headline.length > 0 ? <Slider {...settings}>
        
        {headline.map((slideData, idx) => (
          <Slide key={idx} headline={slideData} />
        ))}

      </Slider>: <Skeleton />}

      
    </div>



  )
}

export default MainNews