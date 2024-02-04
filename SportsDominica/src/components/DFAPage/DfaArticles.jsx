import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'


// Function to fetch article data and structured data
import GetArticles from '../../modules/Homepage/TrendingSection/TrendingSectionDataFetch'

// Redux
import { useSelector } from 'react-redux';



const DfaArticles = () => {

  GetArticles()

  const articles_raw = useSelector((state) => state.articles)
  const articles = articles_raw[0]




  return (
    
    <Box marginTop={2}>

    <Stack direction='column' spacing={2} width={{xs: '90%'}} margin={{xs:'auto'}} divider={<Divider orientation='horizontal' flexItem />} >



      {articles ? articles.filter(item => item.league == 'DFA').map((item, idx) => {

      return (
      <Box key={idx}>
        
        <Card sx={{ boxShadow: 'none', border: {xs: '1px solid #D3E1FF'}}}>

          <CardActions>

            <Stack>

              {/* TODO: Link this page to the premiere league home page */}


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

    }): <Skeleton variant="rectangular" width='100%' height={500} />}
               

    </Stack>

  </Box>
  )
}

export default DfaArticles