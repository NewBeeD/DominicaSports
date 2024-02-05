import NavBar from "../../components/homePage/NavBar"

// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'

import GetArticles from "../../modules/Homepage/TrendingSection/TrendingSectionDataFetch";

import DfaArticles from "../../components/DFAPage/DfaArticles";
import Points_Table from "../../components/homePage/Points_Table";
import MainNews from "../../components/homePage/MainNews";




const DFA = () => {

  const first = 'first'

  // GetArticles()

  // let articles = useSelector((state) => state.articles)
  // articles = articles[0]

  return (
    <>

    <NavBar />
    <Typography marginTop={{xs: 1}} marginBottom={{xs: 2}} variant="h5" sx={{ textAlign: 'center', color: 'blue', fontWeight: 900}}>Dominica Football Association</Typography>
    <MainNews />
    <DfaArticles level='first' />
    <Box marginY={2} />
    <Points_Table page='Homepage'/>
    <DfaArticles level='second' />

    
    
    </>
  )
}

export default DFA