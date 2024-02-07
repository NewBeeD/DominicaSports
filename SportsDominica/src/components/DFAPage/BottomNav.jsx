import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, BottomNavigation, BottomNavigationAction } from '@mui/material'

import '../../css/DfaMainPage.css'

import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const BottomNav = () => {


  return (
    <BottomNavigation showLabels sx={{ width: '100%', position: 'fixed', bottom: 0, display: {sm: 'none'}}}>


        <Link to='/'>
          <BottomNavigationAction label='Home' icon={<HomeIcon sx={{ color: 'blue'}}/>} />
        </Link>
        

        <Link to='/DFA/Tables'>
          <BottomNavigationAction label='Standings' icon={<LeaderboardIcon sx={{ color: 'blue'}}/>} />
        </Link>

        <Link>
          <BottomNavigationAction label='Stats' icon={<AnalyticsIcon sx={{ color: 'blue'}}/>} />
        </Link>


        <Link>
          <BottomNavigationAction label='More' icon={<MoreVertIcon sx={{ color: 'blue'}}/>} />
        </Link>


    </BottomNavigation>
  )
}

export default BottomNav