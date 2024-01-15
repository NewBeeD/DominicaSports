import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid } from '@mui/material'

import { useState } from 'react'
import Divider from '@mui/material/Divider';

// Function to fetch article data and structured data
import GetArticles from '../../modules/Homepage/TrendingSection/TrendingSectionDataFetch'

// Redux
import { useSelector } from 'react-redux';

// Function to properly structure the data recieved from strapi for easy display





const TrendingSection = () => {

  // This function fetches the data on strapi and then structures it, then passes it to redux state
  GetArticles()

  const articles_raw = useSelector((state) => state.articles)
  const articles = articles_raw[0]




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

      

      <Box marginTop={5}>

        <Stack direction='column' spacing={4} width={{xs: '90%'}} margin={{xs:'auto'}} divider={<Divider orientation='horizontal' flexItem />} >



          {articles && articles.map((item, idx) => {

          return (
          <Box key={idx}>
            
            <Card >

              <CardActions>
                <Typography sx={{ color: 'green', fontSize: {xs: 15}, textDecoration: 'underline'}}>{item.league}</Typography>
              </CardActions>

              <CardHeader title={item.title} subheader={item.time}/>

              <CardMedia component='img' height={200} src={item.url} alt={item.alt}/>

              {/* <CardContent>
                <Typography sx={{ color: 'black'}}>
                  {item.Body_Content.length < 25? item.Body_Content: (item.Body_Content.substr(0, 75) + "...")}
                </Typography>
              </CardContent> */}
              
            </Card>

          </Box>)

        })}
                   

        {/* {data?.data.map((item, idx) => {

          return (
          <Box key={idx}>
            
            <Card >

              <CardActions>
                <Typography sx={{ color: 'green', fontSize: {xs: 15}, textDecoration: 'underline'}}>{item.attributes['dfa_leagues'].data[0].attributes['League_Name']}</Typography>
              </CardActions>

              <CardHeader title={item.attributes['Title']} subheader={item.attributes['publishedAt']} />

              <CardMedia component='img' height={200} src={item.attributes['Article_img'].data[0].attributes['formats']['small'].url} alt={item.alt}/>

              <CardContent>
                <Typography sx={{ color: 'black'}}>
                  {item.attributes['Body_Content'].length < 25? item.attributes['Body_Content']: (item.attributes['Body_Content'].substr(0, 75) + "...")}
                </Typography>
              </CardContent>
              
            </Card>

          </Box>)

        })} */}

        </Stack>

      </Box>

    </Box>
  )
}

export default TrendingSection 