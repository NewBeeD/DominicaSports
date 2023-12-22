import {  Box, Typography, Stack, Button } from '@mui/material'


import {slides} from '../../assets/imageData.json'
import '../../css/MainNewsCss.css'

import { useState, useEffect } from 'react';

const MainNews = () => {

  const [headline, setHeadline] = useState(slides)
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

    <Box sx={{ display: 'flex', justifyContent: 'center'}} marginTop={{xs: 0, sm: 4}}>



      <Box width={{xs: '100%', sm: '90%'}} height={{xs: 330, sm: 400}} sx={{ position: {xs: 'relative', sm: 'static'}}}>

        <img src={headline[newsCounter].src} className='mainImage'/>

        <Box sx={{ position: {xs: 'absolute', sm: 'static'},  bottom: {xs: 18, sm: 'inherit'}, left: {xs: 12, sm: 'inherit'}, display: {sm: 'flex'}, justifyContent: {sm: 'center'} }}>

          <Stack direction='column'>

            <Box>
              <Typography fontSize={{xs: 8, sm: 14}} sx={{ color: 'green', fontFamily: 'Josefin Slab', letterSpacing: 2, textAlign: {xs: 'none', sm: 'center', fontFamily: ''}}}>{headline[newsCounter].category}</Typography>
            </Box>

            <Box>
              <Typography fontSize={{xs: 11, sm: 25}} sx={{ color: {xs:'white', sm: 'black'}}}>{headline[newsCounter].title}</Typography>
            </Box>

          </Stack>      

        </Box>


        {/* Horizontal Lines at bottom */}
        <Stack direction='row' spacing={1} marginTop={{xs: 0, sm: 1}} sx={{  position: {xs: 'absolute', sm: 'static'}, bottom: {xs: 5, sm: 'inherit'}, left: {xs: 12, sm: 'inherit'}, display: {sm: 'flex'}, justifyContent: {sm: 'center'}}}>

            {headline.map((_, idx) => {

              return <Box key={idx} width={30} height={2} sx={{ backgroundColor: {xs: (newsCounter === idx? 'green': 'white'), sm: (newsCounter === idx? 'green': 'black')}}}></Box>

            })}
          
        </Stack>  

      </Box>

      

      
    </Box>
  )
}

export default MainNews