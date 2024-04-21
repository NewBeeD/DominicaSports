import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel } from '@mui/material'

import qs from 'qs'
import axios from 'axios'

import NavBar from '../../components/homePage/NavBar'

import { queryParams_fixtures } from '../../modules/DFA/QueryParams'
import GroupingFixturesByDate from '../../modules/Homepage/Fixtures/FixturesDisplay'

import { useState, useEffect } from 'react'

import Footer from '../../components/Footer/Footer'

const FixturesPage = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [type, setType] = useState('now')




  useEffect(()=>{

    const fetchData = async () => {
      try {
        // Set loading to true when starting the fetch
        setLoading(true);

        const queryString = qs.stringify(queryParams_fixtures);

        // Your API endpoint URL
        const apiUrl = `https://strapi-dominica-sport.onrender.com/api/fixtures?${queryString}`;
  

        // Make the fetch request
        const response = await axios.get(apiUrl);

        // Check if the request was successful (status code 2xx)
        if (response.status !== 200) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON data
        const result = await response.data;

        let final_data = GroupingFixturesByDate(result)



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


  }, [])

  return (

    <Box>

      <NavBar />
      

      <Box width={{sm: 800, md: 900}} margin='auto' paddingTop={10}>

      <Typography paddingBottom={3} variant="h4" sx={{ textAlign: 'center', color: 'blue', fontWeight: 900}}>Game Fixtures</Typography>

        <Box marginTop={2.3} width={{ xs: '95%'}} marginX='auto' sx={{ backgroundColor: {xs: '#F9F9F9', sm: 'white'}, border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>
      

          {data && type === 'now' ? (data.filter(item => item.Complete != 'Yes').map((item, idx) => {

            return(
              
              <Box key={idx} width={{xs: '100%'}} margin={{xs:'auto'}}>

                <Card sx={{ marginY: {xs: 0}, height: 'auto', boxShadow: 'none', borderBottom: {xs: '1px solid #D3E1FF'}, borderRadius: {xs: '4px'}}}>

                  <Stack direction={{xs: 'row'}} justifyContent='space-between' marginX={2} paddingTop={1}>

                    <Stack direction='column' spacing={0.5}>

                      <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Home}</Typography>
                      <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Away}</Typography>

                    </Stack>

                    <Stack direction='column' spacing={0.5}>
                      {item.HomeScore ? (<Typography style={{ fontSize: 13, fontWeight:900, color: 'blue' }}>{item.HomeScore}</Typography>): item.HomeScore === 0? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>0</Typography>) :(<Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Date}</Typography>)}

                      {item.AwayScore? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>{item.AwayScore}</Typography>): item.AwayScore === 0? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>0</Typography>):(<Typography  fontStyle={{ fontWeight: 900, fontSize: 12.5}}>{item.Time}</Typography>)}
                    </Stack>

                  </Stack>

                  <Box >

                    <Typography style={{ fontSize: 12 }} sx={{ textAlign: 'center', color: 'blue'}}>{item.Cancelled === 'Yes'? 'Cancelled': item.Venue}</Typography>

                  </Box>

                  

                </Card>
                
              </Box>

            )})): type === 'past'? (data.filter(item => item.Complete === 'Yes').map((item, idx) => {

              return(
                
                <Box key={idx} width={{xs: '100%'}} margin={{xs:'auto'}}>

                  <Card sx={{ marginY: {xs: 0}, height: 'auto', boxShadow: 'none', borderBottom: {xs: '1px solid #D3E1FF'}, borderRadius: {xs: '4px'}}}>

                    <Box marginTop={1} sx={{ display: {xs: 'flex'}, justifyContent: 'center'}}>

                      <Typography>
                        {type === 'past'? <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Date}</Typography>: ''}
                      </Typography>
                      
                    </Box>


                    <Stack direction={{xs: 'row'}} justifyContent='space-between' marginX={2} paddingTop={1}>

                      <Stack direction='column' spacing={0.5}>

                        <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Home}</Typography>
                        <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Away}</Typography>

                      </Stack>


                      <Stack direction='column' spacing={0.5}>

                        <Typography style={{ fontSize: 13, fontWeight:900, color: 'blue' }}>{item.HomeScore}</Typography>

                        <Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>{item.AwayScore}</Typography>
                      </Stack>

                    </Stack>

                    <Box marginBottom={1}>

                      <Typography style={{ fontSize: 12 }} sx={{ textAlign: 'center', color: 'blue'}}>{item.Cancelled === 'Yes'? 'Cancelled': item.League}</Typography>

                    </Box>

                    

                  </Card>
                  
                </Box>

              )})): <Skeleton variant="rectangular" width={310} height={60} />}     


        </Box>

        <Stack justifyContent='center' direction='row' marginTop={3} marginBottom={8}>

          {type != 'now' ? <Button variant="outlined" onClick={() => setType('now')} size="small">
            Upcoming Fixtures
          </Button>: ''}

          {type != 'past' ? <Button variant="outlined" onClick={() => setType('past')} size="small">
            Past Results
          </Button>: ''}
        </Stack>

      </Box>



      <Footer />

    </Box>
  )
}

export default FixturesPage