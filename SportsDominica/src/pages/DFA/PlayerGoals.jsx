import { useSelector } from 'react-redux';

import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material'


import NavBar from "../../components/homePage/NavBar"

function Sort(a, b){

  return b.Goals - a.Goals
}



const PlayerGoals = () => {

  let player_stats = useSelector((state) => state.DfaPlayerStats)
  let players_data = player_stats ? player_stats[0]: []
  players_data = players_data ? players_data.map(goals => goals).sort(Sort): []
  // players_data = players_data ? players_data.sort(Sort): []

  let current_season = players_data[0] ? players_data[0].Season.substring(1).replace('-', '/'): '';

  console.log(players_data); 
  
  
  return (
    <Box>

      <NavBar />

      <Box marginBottom={3}>
        <Typography variant='h5' sx={{ fontWeight: 'bold'}}>Goals</Typography>

        <Typography>
          {current_season && current_season}
        </Typography>
      </Box>

      
      <Paper marginBottom={4} >
        {players_data && (

          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='column'>
              <Box><Typography sx={{ fontWeight: 'bold'}}>1</Typography></Box>
              <Box><Typography sx={{ fontWeight: 'bold'}}>{players_data[0].First_Name}</Typography></Box>
              <Box><Typography sx={{ fontWeight: 'bold'}}>{players_data[0].Last_Name}</Typography></Box>
              <Box><Typography variant='caption' sx={{ fontWeight: 'bold'}}>{players_data[0].team}</Typography></Box>
              <Box><Typography variant='h5' sx={{ fontWeight: 'bold'}}>{players_data[0].Goals}</Typography></Box>
            </Stack>

            <Box width={{xs: 130}}>
              <img src={players_data[0].url} width='100%' height='100%' />
            </Box>


          </Stack>

        )}
      </Paper>

      <Paper>

        <Table sx={{ marginTop: {xs: 2}}}>

          <TableHead>
            <TableRow>
              <TableCell>Pos</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Club</TableCell>
              <TableCell>Goals</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {players_data && players_data.slice(1).map((item, idx) => {

              return (
                
                <TableRow key={idx}>

                  <TableCell sx={{ fontWeight: 'bold'}}>{idx+2}</TableCell>
                  <TableCell>{item.Last_Name} {item.First_Name}</TableCell>
                  <TableCell>{item.team}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>{item.Goals}</TableCell>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>

      </Paper>



    </Box>
  )
}

export default PlayerGoals