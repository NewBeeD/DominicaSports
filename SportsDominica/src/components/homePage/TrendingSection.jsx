import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid } from '@mui/material'

import { useState } from 'react'
import Divider from '@mui/material/Divider';

import {slides} from '../../assets/imageData.json'
import '../../css/TrendingNewsCss.css'

const TrendingSection = () => {

  const [trendingNews, setTrendingNews] = useState(slides)
  
  
  return (
    
    <Box sx={{ backgroundColor: {xs: 'white', sm: 'white'}}} marginBottom={4}>  

      <Stack marginBottom={{xs: 2}}>

        <Typography width={85} marginLeft={2} marginTop={{xs: 2.5, sm: 3}}  fontSize={{xs: 16, sm: 30}} sx={{ letterSpacing: {xs:0, sm: 5}, fontWeight: {xs: '900', sm: '900'}, color: 'black' }}>
          WHAT'S 
        </Typography>

        <Typography width={85} marginTop={{xs:-1.2, sm:-2.5}} marginLeft={{xs: 4, sm: 6.5}} fontSize={{xs: 16, sm: 30}} sx={{ letterSpacing: {xs:0, sm: 5}, fontWeight: 900, color: 'Blue' }}>
          NEW
        </Typography>

      </Stack>

      

      <Box>

        <Stack direction='column' spacing={4} width={{xs: '90%'}} margin={{xs:'auto'}} divider={<Divider orientation='horizontal' flexItem />} >

         

          {trendingNews && trendingNews.map((item, idx) => {

            return (
            <Box key={idx}>
              
              <Card >

                <CardActions>
                  <Typography sx={{ color: 'green', fontSize: {xs: 15}, textDecoration: 'underline'}}>{item.category}</Typography>
                </CardActions>

                <CardHeader title={item.title} subheader='3 mins ago' />
                <CardContent>
                  <Typography sx={{ color: 'black'}} >
                    {item.news.length < 25? item.news: (item.news.substr(0, 55) + "...")}
                  </Typography>
                </CardContent>
                <CardMedia component='img' height={200} src={item.src} alt={item.alt}/>
              </Card>

            </Box>)
            
          })}

        </Stack>

      </Box>

    </Box>
  )
}

export default TrendingSection 