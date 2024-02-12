import NavBar from "../../components/homePage/NavBar"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useState } from "react"

import '../../css/DfaMainPage.css'


// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper } from '@mui/material'

import GetArticles from "../../modules/Homepage/TrendingSection/TrendingSectionDataFetch";

import DfaArticles from "../../components/DFAPage/DfaArticles";
import Points_Table from "../../components/homePage/Points_Table";
import MainNews from "../../components/homePage/MainNews";
import Video from "../../components/Video";
import BottomNav from "../../components/DFAPage/BottomNav";
import FixturesData from "../../components/homePage/Fixtures"




const DFA = () => {



  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState('Men');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (choice) => {
    setSelectedChoice(choice);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  // GetArticles()

  // let articles = useSelector((state) => state.articles)
  // articles = articles[0]

  // 6mfXc8gw9mA

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
    <Video video_id ='DUFpVvH-4CY'/>
    <Box height={{xs:50}} marginY={1} />
    {/* <BottomNav /> */}

    <Paper sx={{ width: '100%', height: '50px', position: 'fixed', bottom: 0, display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', backgroundColor: 'blue'}}>

      <Stack justifyContent='center' alignItems='center' direction='row' spacing={1.3}>

        <Box>
          <Button 
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={handleClick}
          endIcon={<KeyboardArrowUpIcon style={{ color: 'white'}} />}
          style={{ textTransform: 'capitalize', fontSize: '12px', color: 'white', padding: '0px'}}
          size='small'>
            {selectedChoice}
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top', // Position of the anchor element
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom', // Position of the menu
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick('Men')}>Men</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Women')}>Women</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Div 1')}>Division 1</MenuItem>
          </Menu>
        </Box>

        <Box>
          <Button size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
            <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Fixtures</Typography>
          </Button>
        </Box>

        <Box>
          <Button size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
            <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Results</Typography>
          </Button>
        </Box>

        <Box>
          <Button size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
            <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Tables</Typography>
          </Button>
        </Box>

        <Box>
          <Button size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
            <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Players</Typography>
          </Button>
        </Box>


      </Stack>

    </Paper>
    
    </>
  )
}

export default DFA