import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination , Paper, Box, Stack, Typography, Skeleton, Button } from "@mui/material"

import NavBar from "../../components/homePage/NavBar"

const LeagueStanding = () => {

  const leagues = [
    {name: 'DFA'},
    {name: 'DABA'},
    {name: 'DNA'},
    {name: 'DAVA'},
    {name: 'DCA'},
  ]


  return (
    <Box >

      <NavBar />

      <Stack justifyContent='center' width={{ xs: '90%'}} spacing={0.5} marginTop={3} direction='row' sx={{ border: '2px solid red'}} flexWrap='wrap'>
        
        {leagues.map((item, idx) => {

          return (
            <Button size="small" variant="contained" key={idx}>

              <Typography variant="b1" sx={{ fontWeight: 'bold'}}>{item.name}</Typography>

            </Button>
          )

          

        })}

      </Stack>

      
    </Box>
  )
}

export default LeagueStanding