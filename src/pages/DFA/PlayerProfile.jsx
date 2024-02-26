import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel } from '@mui/material'

import NavBar from "../../components/homePage/NavBar"

const PlayerProfile = () => {

  const { id } = useParams()
  let players = useSelector((state) => state.DfaPlayers)

  let current_player = players ? players[0].filter(item => item.FirstName === id): [];



  return (
    <Box>

      <NavBar />


      {current_player && (
        <Box>

          <Typography>{current_player[0].FirstName} {current_player[0].Last_Name}</Typography>

          <Stack marginTop={2} direction='row' justifyContent='center'>

            <Box width={{xs:150}} height={170}>

              {current_player[0].Position == 'CM' || current_player[0].Position == 'CDM'? 'Midfielder': current_player[0].Position == 'LW' || current_player[0].Position == 'RW' || current_player[0].Position == 'ST' || current_player[0].Position == 'CF' || current_player[0].Position == 'CAM'? 'Forward': current_player[0].Position == 'GK'? 'Goalkeeper' :'Defender'}

            </Box>

            <Box width={{xs:150}} height={170}>

              <img src={current_player[0].url} width='100%' />

            </Box>

          </Stack>

          <Box>

            <Typography marginLeft={2}>Personal Details</Typography>

            <Stack paddingX={{xs: 2}} marginTop={2}>
              <Stack justifyContent='space-between' direction='row'>
                <Typography>Date of Birth:</Typography>
                <Typography>{current_player[0].BirthDate}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Age:</Typography>
                <Typography>{current_player[0].Age}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Club:</Typography>
                <Typography>{current_player[0].Current_Team}</Typography>
              </Stack>

              <Stack justifyContent='space-between' direction='row'>
                <Typography>Position:</Typography>
                <Typography>{current_player[0].Position}</Typography>
              </Stack>

            </Stack>
          
          </Box>

          <Box marginTop={4} paddingLeft={{ xs: 2}}>
            <Typography>Premier League Record</Typography>

            <Stack marginTop={2} direction='row' justifyContent='space-between'>

              <Stack width={150} height={80} direction='column' sx={{ border: '1px solid black'}}>
                <Typography>Appearances</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{current_player[0].Appearances}</Typography>
                
              </Stack>

              <Stack width={150} height={80} direction='column' sx={{ border: '1px solid black'}}>
                <Typography>Goals</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{current_player[0].Goals}</Typography>
                
              </Stack>

            </Stack>

            <Stack marginTop={1} direction='row' justifyContent='space-between'>

              <Stack width={150} height={80} justifyContent='space-between' direction='column' sx={{ border: '1px solid black'}}>
                <Typography>Assists</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{current_player[0].Assists}</Typography>
                
              </Stack>

              <Stack width={150} height={80} direction='column' sx={{ border: '1px solid black'}}>
                <Typography>Yellow Cards</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold'}}>{current_player[0].YellowCards}</Typography>
                
              </Stack>

            </Stack>

          </Box>

          
        </Box>
      )}
    </Box>
  )
}

export default PlayerProfile