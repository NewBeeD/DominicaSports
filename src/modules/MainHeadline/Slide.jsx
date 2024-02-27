import {  Box, Typography, Stack, Button, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom';

import '../../css/MainNewsCss.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ headline }) => {

 
  
  return (


    <Box height={{sm: 500}} sx={{ display: 'flex', justifyContent: 'center', overflow: 'hidden'}} marginTop={{xs: 0, sm: 4}}>

      
      
      <Box width={{xs: '100%', sm: '90%'}} height={{xs: 330, sm: 400}} sx={{ position: {xs: 'relative', sm: 'static'}}}>

        <Link to={`/${headline['id']}`}>
          <img src={headline.url[0]} className='mainImage'/>
        </Link>


        <Box sx={{ position: {xs: 'absolute', sm: 'static'},  bottom: {xs: 18, sm: 'inherit'}, left: {xs: 12, sm: 'inherit'}, display: {sm: 'flex'}, justifyContent: {sm: 'center'} }}>

          <Stack direction='column'>

            <Box>
              <Typography fontSize={{xs: 10, sm: 14}} sx={{ color: 'yellow', fontFamily: 'Josefin Slab', letterSpacing: 2, textAlign: {xs: 'none', sm: 'center', fontWeight: 900}}}>{headline.league}</Typography>
            </Box>

            <Box>
              <Typography fontSize={{xs: 12, sm: 25}} sx={{ color: {xs:'white', sm: 'white'}}}>{headline.title}</Typography>
            </Box>

          </Stack>      

        </Box>

      </Box>

    </Box>
  )
}

export default Slide