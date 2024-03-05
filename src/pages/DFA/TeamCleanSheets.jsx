import { useSelector } from 'react-redux';

import qs from 'qs'
import axios from "axios"

import { useState, useEffect } from 'react';

import { queryParams_prem_players_stats } from '../../modules/DFA/QueryParams';
import PlayerStatsDisplayStructure from '../../modules/DFA/PlayerStats/PlayerStatsDisplayStructure';

import theme from '../../css/theme';

import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import TeamCleanSheetsStructure from '../../modules/DFA/PlayerStats/MostTeamCleanSheets'

import NavBar from "../../components/homePage/NavBar"

const TeamCleanSheets = () => {


  const [players_data, setPlayers_data] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentSeason, setCurrentSeason] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true when starting the fetch
        setLoading(true);

        const queryString = qs.stringify(queryParams_prem_players_stats);

        // Your API endpoint URL
        const apiUrl = `https://strapi-dominica-sport.onrender.com/api/player-stats?${queryString}`;
  

        // Make the fetch request
        const response = await axios.get(apiUrl);

        // Check if the request was successful (status code 2xx)
        if (response.status !== 200) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON data
        const result = await response.data.data;

        let final_data = PlayerStatsDisplayStructure(result)
        setCurrentSeason(final_data[0].Season.substring(1).replace('-', '/'))
        final_data = TeamCleanSheetsStructure(final_data)

        // Set the data state
        setPlayers_data(final_data);
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

    <Box>

      <NavBar />


      
      <Box marginBottom={3} paddingLeft={{ xs: 1}}>
        <Typography variant='h5' sx={{ fontWeight: 'bold'}}>Goals</Typography>

        <Typography>
          {currentSeason && currentSeason}
        </Typography>
      </Box>

      
      <Paper marginBottom={4} sx={{ width: {xs: '98%'}, margin: 'auto'}}>
        {players_data && (

          <Stack style={{ backgroundColor: `var(--color-color4, ${theme.colors.color4})`}} paddingY={{xs: 2}} direction='row' justifyContent='space-between' sx={{ color: 'white'}}>
            <Stack direction='column' paddingLeft={{xs: 1}}>

              <Box><Typography sx={{ fontWeight: 'bold'}}>1</Typography></Box>

              <Box><Typography sx={{ fontWeight: 'bold'}}>{players_data[0].teamName}</Typography></Box>

              <Box marginTop={3}><Typography variant='h4' sx={{ fontWeight: 'bold'}}>{players_data[0].totalCleanSheets}</Typography></Box>
            </Stack>

            <Box width={{xs: 130}}>
              <img src={players_data[0].url} width='100%' height='100%' />
            </Box>


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

            {players_data && players_data.slice(1).map((item, idx) => {

              return (
                
                <TableRow key={idx} sx={{ textAlign: 'center'}}>

                  <TableCell sx={{ fontWeight: 'bold', paddingY: 0.5, textAlign: 'center'}}>{idx+2}</TableCell>
                  <TableCell sx={{ paddingY: 0.5}}>{item.teamName}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', paddingY: 0.5, textAlign: 'center'}}>{item.totalCleanSheets}</TableCell>
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