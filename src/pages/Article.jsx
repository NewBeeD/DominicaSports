import NavBar from "../components/homePage/NavBar"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import qs from 'qs'
import axios from "axios"

import { queryParams_articles } from "../modules/DFA/QueryParams"
import SingleStructuredDisplay from "../modules/Homepage/TrendingSection/SingleArticleDisplayStructure"

// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'

import ParagraphsDisplay from "../components/Article/ParagraphsDisplay";


import GetArticles from "../modules/Homepage/TrendingSection/TrendingSectionDataFetch";








const Article = () => {

  // GetArticles()
  const { id } = useParams()


  // let articles = useSelector((state) => state.articles)
  // articles = articles[0]


  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true when starting the fetch
        setLoading(true);

        const queryString = qs.stringify(queryParams_articles);

        // Your API endpoint URL
        const apiUrl = `https://strapi-dominica-sport.onrender.com/api/articles/${id}?${queryString}`;
  

        // Make the fetch request
        const response = await axios.get(apiUrl);

        console.log(response);

        // Check if the request was successful (status code 2xx)
        if (response.status !== 200) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON data
        const result = await response.data.data;

        let final_data = SingleStructuredDisplay(result)
        
        // Set the data state
        setArticles(final_data);
      } catch (error) {
        // Set the error state if there's an issue
        setError(error.message);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  


  return (

    <>

      <NavBar />

      <Box margin='auto' width= {{ xs: '90%'}}>

        {articles? 
          (

            <Box>

              <Box marginTop={4}>
                <Typography variant="h4" sx={{ textAlign: 'left'}}>{articles.title}</Typography>
              </Box>

              <Box marginY={2}>
                <img width='100%' src={articles.url[0]}/>
              </Box>

              <Box marginTop={1} sx={{ fontSize: {xs: '11px'}, fontWeight: 'bolder'}}>{articles.league}</Box>
              <Box marginTop={0.5} sx={{ fontSize: {xs: '11px'}}}>{articles.author}</Box>
              <Box marginTop={0.5} sx={{ fontSize: {xs: '11px'}}}>{articles.date}</Box>


              <Divider sx={{ marginTop: 1}} />

              <Box marginTop={3.5} sx={{ textAlign: 'left'}}>
                <ParagraphsDisplay paragraphs={articles.body_content} />
              </Box>

              {/* <Box marginTop={4} /> */}

              <Divider orientation='vertical' sx={{ marginY: 3}} />

              <Box>
                {articles.url.length > 1? articles.url.map((articles, idx) => {

                  return(
                      <img key={idx} width='100%' src={articles}/>
                  )

                }): ''}
              </Box>

              
            </Box>
          ): <Skeleton width='100%' height='500px' variant="rectangular" sx={{ marginTop: 4}} />}

      </Box>


    
    
    
    </>

    
    
  )
}

export default Article