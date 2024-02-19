import { useSelector } from 'react-redux';

import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import TeamCleanSheetsStructure from '../../modules/DFA/PlayerStats/MostTeamCleanSheets'

import NavBar from "../../components/homePage/NavBar"

const TeamCleanSheets = () => {

  let player_stats = useSelector((state) => state.DfaPlayerStats)
  let players_data = player_stats ? player_stats[0]: []
  let players_data_final = players_data ? TeamCleanSheetsStructure(players_data): []

  // console.log('Inside Comp',players_data);


  let current_season = players_data[0] ? players_data[0].Season.substring(1).replace('-', '/'): '';


  return (

    <Box>

      <NavBar />


      
      <Box marginBottom={3}>
        <Typography variant='h5' sx={{ fontWeight: 'bold'}}>Goals</Typography>

        <Typography>
          {current_season && current_season}
        </Typography>
      </Box>

      
      <Paper marginBottom={4} sx={{ width: {xs: '98%'}, margin: 'auto'}}>
        {players_data && (

          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='column' paddingLeft={{xs: 1}}>

              <Box><Typography sx={{ fontWeight: 'bold'}}>1</Typography></Box>

              <Box><Typography sx={{ fontWeight: 'bold'}}>{players_data_final[0].teamName}</Typography></Box>

              <Box marginTop={3}><Typography variant='h4' sx={{ fontWeight: 'bold'}}>{players_data_final[0].totalCleanSheets}</Typography></Box>
            </Stack>

            {/* <Box width={{xs: 130}}>
              <img src={players_data[0].url} width='100%' height='100%' />
            </Box> */}


          </Stack>

        )}
      </Paper>

      <Paper sx={{ width: {xs: '98%'}, margin: 'auto'}}>

        <Table sx={{ marginTop: {xs: 2}}}>

          <TableHead>
            <TableRow>
              <TableCell>Pos</TableCell>
              <TableCell>Club</TableCell>
              <TableCell>CleanSheets</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {players_data && players_data_final.slice(1).map((item, idx) => {

              return (
                
                <TableRow key={idx} sx={{ textAlign: 'center'}}>

                  <TableCell sx={{ fontWeight: 'bold', paddingY: 0, textAlign: 'center'}}>{idx+2}</TableCell>
                  <TableCell sx={{ paddingY: 0}}>{item.teamName}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', paddingY: 0, textAlign: 'center'}}>{item.totalCleanSheets}</TableCell>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>

      </Paper>




  </Box>
  )
}

export default TeamCleanSheets