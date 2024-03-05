import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'


// Function to fetch article data and structured data
import GetArticles from '../../modules/Homepage/TrendingSection/TrendingSectionDataFetch'

import theme from '../../css/theme';

import { Link } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux';



const DfaArticles = ({ level }) => {

  GetArticles()

  const articles_raw = useSelector((state) => state.articles)
  let articles = articles_raw && articles_raw[0] ? articles_raw[0].filter(item => item.league == 'DFA' && item.headline != 'YES') : null;

  let articles_length = articles && articles_raw[0] ? articles.length: 0;
  let part_size = articles_length ? Math.ceil(articles_length/3): 0;


  // TODO: Set up articles in slices


  switch(level){

    case 'first':
      articles = articles ? articles.slice(0, part_size): null;
      break;
    
    case 'second':
      articles = articles ? articles.slice(part_size, 2*part_size): null;
      break;
    
    case 'third':
      articles = articles ? articles.slice(2*part_size): null;
  }






  return (
    
    <Box marginTop={2}>

    <Stack direction='column' spacing={2} width={{xs: '90%'}} margin={{xs:'auto'}} divider={<Divider orientation='horizontal' flexItem />} >



      {articles ? articles.map((item, idx) => {

      return (
      <Box key={idx}>
        
        <Card sx={{ boxShadow: 'none', border: {xs: '1px solid #86C232'}}}>

          <CardActions>

            <Stack>

              {/* TODO: Link this page to the premiere league home page */}


               <Typography style={{ color: `var(--color-color2, ${theme.colors.color2})`}} sx={{ fontSize: {xs: 13}, textDecoration: 'underline', fontWeight: 900}}>{item.league}</Typography>



              <Stack direction='row' spacing={0.5}>
                <Typography style={{ color: `var(--color-color3, ${theme.colors.color3})`}} sx={{ fontSize: {xs: 9}}}>{item.author}</Typography>
                <Divider orientation='vertical' flexItem />
                <Typography style={{ color: `var(--color-color3, ${theme.colors.color3})`}} sx={{ fontSize: {xs: 9}}}>{item.time}</Typography>
              </Stack>


            </Stack>

          </CardActions>


          <Link style={{ textDecoration: 'none'}} to={`/${item.id}`}>
            <CardHeader titleTypographyProps={{variant:'body2', fontWeight: 900 }} title={item.title} style={{ color: `var(--color-color3, ${theme.colors.color3})`}}/>
          </Link>



         <CardMedia component='img' height={200} src={item.url[0]} alt={item.alt}/>
          <CardContent>
            <Typography sx={{ color: 'black', fontSize: {xs: 13}}}>
              {item.body_content.length < 25? item.body_content: (item.body_content.substr(0, 80) + "...")}
            </Typography>
          </CardContent>
          
        </Card>

      </Box>)

    }): <Skeleton variant="rectangular" width='100%' height={500} />}
               

    </Stack>

  </Box>
  )
}

export default DfaArticles