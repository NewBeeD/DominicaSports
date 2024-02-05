import {  Box, Typography, Stack, Button, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom';


import {slides} from '../../assets/imageData.json'
import '../../css/MainNewsCss.css'

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';


const MainNews = () => {

  let articles = useSelector((state) => state.articles)
  articles = articles && articles[0] ? articles[0]: '';
  let headline = articles && articles[0] ? articles.filter(item => item.headline == 'Yes' && item.league == 'DFA'): '';



  // const [headline, setHeadline] = useState(slides)
  const [newsCounter, setNewsCounter] = useState(0)


  useEffect(()=>{ 

    const intervalId = setInterval(()=> {

    
      setNewsCounter((prevCount) => {

        if(prevCount < headline.length-1){return prevCount + 1}
        else{return 0}
      })
      
    }, 4000)

    // Clean up the interval when components unmounts
    return () => clearInterval(intervalId)
  }, [])





  return (

    <Box height={{sm: 500}} sx={{ display: 'flex', justifyContent: 'center'}} marginTop={{xs: 0, sm: 4}}>


      {headline != '' ? <Box width={{xs: '100%', sm: '90%'}} height={{xs: 330, sm: 400}} sx={{ position: {xs: 'relative', sm: 'static'}}}>

        <Link to={`/${headline[newsCounter].id}`}>
          <img src={headline[newsCounter].url} className='mainImage'/>
        </Link>


        <Box sx={{ position: {xs: 'absolute', sm: 'static'},  bottom: {xs: 18, sm: 'inherit'}, left: {xs: 12, sm: 'inherit'}, display: {sm: 'flex'}, justifyContent: {sm: 'center'} }}>

          <Stack direction='column'>

            <Box>
              <Typography fontSize={{xs: 8, sm: 14}} sx={{ color: 'green', fontFamily: 'Josefin Slab', letterSpacing: 2, textAlign: {xs: 'none', sm: 'center', fontFamily: ''}}}>{headline[newsCounter].league}</Typography>
            </Box>

            <Box>
              <Typography fontSize={{xs: 11, sm: 25}} sx={{ color: {xs:'white', sm: 'white'}}}>{headline[newsCounter].title}</Typography>
            </Box>

          </Stack>      

        </Box>


        {/* Horizontal Lines at bottom */}
        <Stack direction='row' spacing={1} marginTop={{xs: 0, sm: 1}} sx={{  position: {xs: 'absolute', sm: 'static'}, bottom: {xs: 5, sm: 'inherit'}, left: {xs: 12, sm: 'inherit'}, display: {sm: 'flex'}, justifyContent: {sm: 'center'}}}>

            {headline.map((_, idx) => {

              return <Box key={idx} width={30} height={2} sx={{ backgroundColor: {xs: (newsCounter === idx? 'green': 'white'), sm: (newsCounter === idx? 'white': 'black')}}}></Box>

            })}
          
        </Stack>  

      </Box>: <Skeleton />}

      

      
    </Box>
  )
}

export default MainNews