import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton } from '@mui/material'

import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

// Function to fetch article data and structured data
import GetArticles from '../../modules/Homepage/TrendingSection/TrendingSectionDataFetch'

// Redux
import { useSelector } from 'react-redux';







const TrendingSection = ({ level }) => {

  // This function fetches the data on strapi and then structures it, then passes it to redux state
  GetArticles()

  const articles_raw = useSelector((state) => state.articles)
  let articles = articles_raw[0]


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
    
    <Box sx={{ backgroundColor: {xs: '#F9F9F9', sm: 'white'}}} marginBottom={4}>  

      {level == 'second'? '':level == 'third'? '':(<Stack marginBottom={{xs: 2}}>

        <Typography width={85} marginLeft={2} marginTop={{xs: 2.5, sm: 3}}  fontSize={{xs: 16, sm: 30}} sx={{ letterSpacing: {xs:0, sm: 5}, fontWeight: {xs: '900', sm: '900'}, color: 'black' }}>
          WHAT'S 
        </Typography>

        <Typography width={85} marginTop={{xs:-1.2, sm:-2.5}} marginLeft={{xs: 4, sm: 6.5}} fontSize={{xs: 16, sm: 30}} sx={{ letterSpacing: {xs:0, sm: 5}, fontWeight: 900, color: 'Blue' }}>
          NEW
        </Typography>

      </Stack>)}

      

      <Box marginTop={2}>

        <Stack direction='column' spacing={2} width={{xs: '90%'}} margin={{xs:'auto'}} divider={<Divider orientation='horizontal' flexItem />} >



          {articles ? articles.map((item, idx) => {

          return (
          <Box key={idx}>
            
            <Card sx={{ boxShadow: 'none', border: {xs: '1px solid #D3E1FF'}}}>

              <CardActions>

                <Stack>

                  {/* TODO: Link this page to the premiere league home page */}

                  <Link to='/DFA/Home'>
                   <Typography sx={{ color: 'green', fontSize: {xs: 13}, textDecoration: 'underline'}}>{item.league}</Typography>
                  </Link>


                  <Stack direction='row' spacing={0.5}>
                    <Typography sx={{ color: 'blue', fontSize: {xs: 9}}}>{item.author}</Typography>
                    <Divider orientation='vertical' flexItem />
                    <Typography sx={{ color: 'blue', fontSize: {xs: 9}}}>{item.time}</Typography>
                  </Stack>


                </Stack>

              </CardActions>

              <Link to={`/${item.id}`}>
                <CardHeader titleTypographyProps={{variant:'body2', fontWeight: 900 }} title={item.title} sx={{ color: {xs: 'blue'}}}/>
              </Link>


              <CardMedia component='img' height={200} src={item.url[0]} alt={item.alt}/>

              <CardContent>
                <Typography sx={{ color: 'black', fontSize: {xs: 13}}}>
                  {item.body_content.length < 25? item.body_content: (item.body_content.substr(0, 80) + "...")}
                </Typography>
              </CardContent>
              
            </Card>

          </Box>)

        }): <Skeleton variant="rectangular" width='100%' height={60} />}
                   

        </Stack>

      </Box>

    </Box>
  )
}

export default TrendingSection 