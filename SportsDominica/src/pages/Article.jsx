import NavBar from "../components/homePage/NavBar"

import { useParams } from "react-router-dom"

// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'

import ParagraphsDisplay from "../components/Article/ParagraphsDisplay";


import GetArticles from "../modules/Homepage/TrendingSection/TrendingSectionDataFetch";








const Article = () => {

  // GetArticles()
  const { id } = useParams()


  let articles = useSelector((state) => state.articles)
  articles = articles[0]
  


  return (

    <>

      <NavBar />

      <Box margin='auto' width= {{ xs: '90%'}}>

        {articles? articles.filter(item_id => item_id.id == id).map((item, idx) => {
          return (

            <Box key={idx}>

              <Box marginTop={4}>
                <Typography variant="h4" sx={{ textAlign: 'left'}}>{item.title}</Typography>
              </Box>

              <Box marginY={2}>
                <img width='100%' src={item.url}/>
              </Box>

              <Box marginTop={1} sx={{ fontSize: {xs: '11px'}, fontWeight: 'bolder'}}>{item.league}</Box>
              <Box marginTop={0.5} sx={{ fontSize: {xs: '11px'}}}>{item.author}</Box>
              <Box marginTop={0.5} sx={{ fontSize: {xs: '11px'}}}>{item.date}</Box>


              <Divider sx={{ marginTop: 1}} />

              <Box marginTop={3.5} sx={{ textAlign: 'left'}}>
                <ParagraphsDisplay paragraphs={item.body_content} />
              </Box>

              
            </Box>
          )
        }): <Skeleton width='100%' height='500px' variant="rectangular" sx={{ marginTop: 4}} />}

      </Box>


    
    
    
    </>

    
    
  )
}

export default Article