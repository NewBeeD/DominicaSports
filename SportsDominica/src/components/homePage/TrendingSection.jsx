import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid } from '@mui/material'

import { useState } from 'react'
import Divider from '@mui/material/Divider';

// Function to fetch article data and structured data
import GetArticles from '../../modules/Homepage/TrendingSection/TrendingSectionDataFetch'

// Redux
import { useSelector } from 'react-redux';

// Function to properly structure the data recieved from strapi for easy display





const TrendingSection = (props) => {

  // This function fetches the data on strapi and then structures it, then passes it to redux state
  GetArticles()

  const articles_raw = useSelector((state) => state.articles)
  const articles = articles_raw[0]
  // let total_articles = articles.length

  let first = 0;
  let second = 0;


  if(props.props == 'first'){

    first = 0;
    second = 5;
  }
  if (props.props == 'second'){
    
    first = 5;
    second = 10;

  }


  





  return (
    
    <Box sx={{ backgroundColor: {xs: '#F9F9F9', sm: 'white'}}} marginBottom={4}>  

      {props.props == 'second'? '':(<Stack marginBottom={{xs: 2}}>

        <Typography width={85} marginLeft={2} marginTop={{xs: 2.5, sm: 3}}  fontSize={{xs: 16, sm: 30}} sx={{ letterSpacing: {xs:0, sm: 5}, fontWeight: {xs: '900', sm: '900'}, color: 'black' }}>
          WHAT'S 
        </Typography>

        <Typography width={85} marginTop={{xs:-1.2, sm:-2.5}} marginLeft={{xs: 4, sm: 6.5}} fontSize={{xs: 16, sm: 30}} sx={{ letterSpacing: {xs:0, sm: 5}, fontWeight: 900, color: 'Blue' }}>
          NEW
        </Typography>

      </Stack>)}

      

      <Box marginTop={2}>

        <Stack direction='column' spacing={2} width={{xs: '90%'}} margin={{xs:'auto'}} divider={<Divider orientation='horizontal' flexItem />} >



          {articles && articles.slice(first, second).map((item, idx) => {

          return (
          <Box key={idx}>
            
            <Card sx={{ boxShadow: 'none', border: {xs: '1px solid #D3E1FF'}}}>

              <CardActions>

                <Stack>

                  <Typography sx={{ color: 'green', fontSize: {xs: 13}, textDecoration: 'underline'}}>{item.league}</Typography>

                  <Stack direction='row' spacing={0.5}>
                    <Typography sx={{ color: 'blue', fontSize: {xs: 9}}}>{item.author}</Typography>
                    <Divider orientation='vertical' flexItem />
                    <Typography sx={{ color: 'blue', fontSize: {xs: 9}}}>{item.time}</Typography>
                  </Stack>


                </Stack>

              </CardActions>

              <CardHeader titleTypographyProps={{variant:'body2', fontWeight: 900 }} title={item.title} sx={{ color: {xs: 'blue'}}}/>

              <CardMedia component='img' height={200} src={item.url} alt={item.alt}/>

              <CardContent>
                <Typography sx={{ color: 'black', fontSize: {xs: 13}}}>
                  {item.body_content.length < 25? item.body_content: (item.body_content.substr(0, 80) + "...")}
                </Typography>
              </CardContent>
              
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