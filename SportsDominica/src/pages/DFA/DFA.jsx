import NavBar from "../../components/homePage/NavBar"



// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider } from '@mui/material'

import GetArticles from "../../modules/Homepage/TrendingSection/TrendingSectionDataFetch";

import DfaArticles from "../../components/DFAPage/DfaArticles";
import Points_Table from "../../components/homePage/Points_Table";
import MainNews from "../../components/homePage/MainNews";
import Video from "../../components/Video";
import BottomNav from "../../components/DFAPage/BottomNav";
import FixturesData from "../../components/homePage/Fixtures"




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
    <Video video_id ='XbVCw17Ks6E'/>
    <Box marginY={1.5} />
    <Points_Table page='Homepage'/>
    <DfaArticles level='second' />
    <Box marginY={1.5} />
    <FixturesData />
    <DfaArticles level='third' />
    <Box height={{xs:50}} marginY={1} />
    <BottomNav />
    
    </>
  )
}

export default DFA