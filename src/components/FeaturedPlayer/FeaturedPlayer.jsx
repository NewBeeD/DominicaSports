import qs from 'qs'
import axios from "axios"

import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel, Tab  } from '@mui/material'

import { useState, useEffect } from 'react'

import { queryParams_prem_players } from '../../modules/DFA/QueryParams'
import PlayerDataStructure from '../../modules/DFA/DfaPlayersDisplayStructure'


function getRandomObject(arr) {
  const arrayLength = arr.length;
  if (arrayLength === 0) {
    throw new Error("Array is empty. Cannot pick a random object.");
  }
  // Generate a random index between 0 and arrayLength - 1
  const randomIndex = Math.floor(Math.random() * arrayLength);
  return arr[randomIndex];
}





const FeaturedPlayer = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchData = async () => {
      try {
        // Set loading to true when starting the fetch
        setLoading(true);

        const queryString = qs.stringify(queryParams_prem_players);

        // Your API endpoint URL
        const apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-players?${queryString}`;
  

        // Make the fetch request
        const response = await axios.get(apiUrl);

        // Check if the request was successful (status code 2xx)
        if (response.status !== 200) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON data
        const result = await response.data.data;

        let final_data = PlayerDataStructure(result)

        let featured_player = getRandomObject(final_data);

        console.log(featured_player);
        
        // Set the data state
        setData(featured_player);
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


  }, [])




  return (
    <Box height={200} width={350}>

        {data && <Paper>

          <Card>

            <CardContent>

              <Stack direction='column' >

                <Box>

                  <Stack direction='row' justifyContent='space-between' spacing={2}>

                    <Box>

                      <Stack direction='column' spacing={0.5}>

                        <Stack direction='column'>
                          <Box><Typography>Team:</Typography></Box>
                          <Box><Typography>{data.Current_Team}</Typography></Box>
                        </Stack>

                        <Stack direction='column'>
                          <Box><Typography>League:</Typography></Box>
                          <Box><Typography>{data.LeagueAssociation}</Typography></Box>
                        </Stack>

                        <Stack direction='column'>
                          <Box><Typography>Age:</Typography></Box>
                          <Box><Typography>{data.Age}</Typography></Box>
                        </Stack>

                      </Stack>

                      
                    </Box>

                    <Box>
                      <CardMedia 
                      component='img' 
                      image={data.url} 
                      sx={{ width: 180}}
                      alt='Player Image' />
                    </Box>

                  </Stack>

                </Box>

                <Box>

                  <Typography variant='caption'>{data.FirstName}</Typography>
                  <Typography variant='h6'>{data.Last_Name}</Typography>
                  <Typography>{data.Position}</Typography>

                </Box>


              </Stack>

            </CardContent>

          </Card>


        </Paper>}

    </Box>
  )
}

export default FeaturedPlayer