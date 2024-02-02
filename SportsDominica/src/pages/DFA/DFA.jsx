import NavBar from "../../components/homePage/NavBar"

// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'

import GetArticles from "../../modules/Homepage/TrendingSection/TrendingSectionDataFetch";

import DfaArticles from "../../components/DFAPage/DfaArticles";
import Points_Table from "../../components/homePage/Points_Table";




const DFA = () => {

  const first = 'first'

  // GetArticles()

  // let articles = useSelector((state) => state.articles)
  // articles = articles[0]

  return (
    <>

    <NavBar />
    <DfaArticles/>
    
    </>
  )
}

export default DFA