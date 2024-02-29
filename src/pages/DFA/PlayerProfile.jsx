import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useState, useEffect } from "react"

import qs from 'qs'
import axios from "axios"

import { queryParams_prem_players } from "../../modules/DFA/QueryParams"

import SinglePlayerDisplay from "../../modules/DFA/PlayerStats/SinglePlayerDispl/SinglePlayerDisplay"



import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel } from '@mui/material'

// import getPlayInfo from "../../modules/DFA/PlayerStats/PlayerProfileReload"

import NavBar from "../../components/homePage/NavBar"



const PlayerProfile = () => {

  const { id } = useParams()

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
        const apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-players/${id}?${queryString}`;
  

        // Make the fetch request
        const response = await axios.get(apiUrl);

        // Check if the request was successful (status code 2xx)
        if (response.status !== 200) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON data
        const result = await response.data.data;

        let final_data = SinglePlayerDisplay(result)
        
        // Set the data state
        setData(final_data);
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
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // if (loading) {
  //   return (
  //     <>

  //     <NavBar />

  //     <Box sx={{ display: 'flex', justifyContent: 'center'}}>
  //       <Skeleton width={200} height={400} />;
  //     </Box>
      
  //     </>
      
  //   )
  // }

  // if (error) {
  //   return (
  //     <>

  //     <NavBar />

  //     <Box sx={{ display: 'flex', justifyContent: 'center'}}>
  //       <Skeleton width={200} height={400} />;
  //     </Box>
      
  //     </>
      
  //   )
  // }

  





  return (
    <Box>

      <NavBar />

      {/* {data.id} */}


      {data ? (
        <Box sx={{ display: 'flex' , flexDirection: 'column' ,justifyContent: 'center'}}>

          <Typography paddingLeft={{ xs: 2}} marginTop={{ xs: 1}} sx={{ fontWeight: 900}}>{data.FirstName} {data.Last_Name}</Typography>

          <Box paddingLeft={{ xs: 2}} marginBottom={1}>

                <Typography>

                  {data.Position == 'CM' || data.Position == 'CDM'? 'Midfielder': data.Position == 'LW' || data.Position == 'RW' || data.Position == 'ST' || data.Position == 'CF' || data.Position == 'CAM'? 'Forward': data.Position == 'GK'? 'Goalkeeper' :'Defender'}

                </Typography>


            </Box>

          <Box margin='auto'>
            

            <Stack direction='column' justifyContent='center'  >

              <Box width={{xs:280}} height='auto' >

                <img src={data.url} width='100%' />

              </Box>

            </Stack>

          </Box>


          <Box>

            <Typography marginLeft={2} marginTop={5}>Personal Details</Typography>

            <Stack paddingX={{xs: 2}} marginTop={2}>
              <Stack justifyContent='space-between' direction='row'>
                <Typography>Date of Birth:</Typography>
                <Typography>{data.BirthDate}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Age:</Typography>
                <Typography>{data.Age}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Club:</Typography>
                <Typography>{data.Current_Team}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Position:</Typography>
                <Typography>{data.Position}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Foot:</Typography>
                <Typography>{data.Foot}</Typography>
              </Stack>

            </Stack>
          
          </Box>

          <Box marginTop={4} paddingX={{ xs: 2}}>
            <Typography>Premier League Record</Typography>

            <Stack marginTop={2} direction='row' justifyContent='space-between'>

              <Stack width={150} height={80} direction='column' sx={{ border: '1px solid black', textAlign: 'center'}}>
                <Typography>Appearances</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{data.Appearances}</Typography>
                
              </Stack>

              <Stack width={150} height={80} direction='column' sx={{ border: '1px solid black', textAlign: 'center'}}>
                <Typography>Goals</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{data.Goals}</Typography>
                
              </Stack>

            </Stack>

            <Stack marginTop={1} direction='row' justifyContent='space-between'>

              <Stack width={150} height={80} justifyContent='space-between' direction='column' sx={{ border: '1px solid black', textAlign: 'center'}}>
                <Typography>Assists</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{data.Assists}</Typography>
                
              </Stack>

              <Stack width={150} height={80} direction='column' sx={{ border: '1px solid black', textAlign: 'center'}}>
                <Typography>Yellow Cards</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{data.YellowCards}</Typography>
                
              </Stack>

            </Stack>

          </Box>

          
        </Box>
      ): <Skeleton width='100%' height='500px' variant="rectangular" sx={{ marginTop: 4}} />}

    </Box>
  )
}

export default PlayerProfile