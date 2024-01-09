import { Paper, Box, Stack, Typography, Card, CardHeader, CardContent, CardMedia, CardActions } from "@mui/material"

import { useState } from "react"

import {dfa_prem_fixtures} from '../../assets/fixtures/dfa_prem_fixtures.json'
import {daba_prem_fixtures} from '../../assets/fixtures/daba_prem_fixtures.json'

import GroupingFixturesByDate from "../../modules/Homepage/FixturesDisplay"


function SortPoints(a, b) {
  return b.Points - a.Points;
}

const FixturesData = ({leagueName}) => {

  const [dfaData, setDfaData] = useState(dfa_prem_fixtures)
  const [dabaData, setDabaData] = useState(daba_prem_fixtures)

  GroupingFixturesByDate(dfaData)

  return(
    <Box marginTop={5}>
      


    </Box>
  )

  // if(leagueName === 'dfa'){

  //   return (

  //     <Box marginTop={8} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center'}}>
  
  //       <Typography>Fixtures</Typography>
  
  //       <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
  //       <Table sx={{ border: '1px solid black'}}>
  
  //         <TableHead>
  //           <TableRow >
  //             <TableCell sx={{ fontSize: {xs: 13}}}>Date</TableCell>
  //             <TableCell sx={{ fontSize: {xs: 13}}}>Time</TableCell>
  //             <TableCell align="center" sx={{ fontSize: {xs: 13}}}>Teams</TableCell>
  //             <TableCell align="center" sx={{ fontSize: {xs: 13}}}>Venue</TableCell>
  //           </TableRow>
  //         </TableHead>
  
  //         <TableBody>
  //           {dfaData.map(row => (
  
  //             <TableRow key={row.team} sx={{ border: 0}}>
  
  //               <TableCell sx={{ fontSize: {xs: 12}}}>{row.Date}</TableCell>
  //               <TableCell sx={{ fontSize: {xs: 12}}}>{row.Time}</TableCell>
  //               <TableCell align="center" sx={{ fontSize: {xs: 12}}}>{row.Teams}</TableCell>
  //               <TableCell align="center" sx={{ fontSize: {xs: 12}}}>{row.Venue}</TableCell>
                
  //             </TableRow>
  //           ))}
  //         </TableBody>
  
  
  //       </Table>
  
  //       </TableContainer>
  
  //     </Box>   
  
  //   )

    
  // }
  // else if(leagueName === 'daba'){
  //   return (

  //     <Box marginTop={8} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center'}}>
  
  //       <Typography>Fixtures</Typography>
  
  //       <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
  //       <Table sx={{ border: '1px solid black'}}>
  
  //         <TableHead>
  //           <TableRow >
  //             <TableCell sx={{ fontSize: {xs: 13}}}>Date</TableCell>
  //             <TableCell sx={{ fontSize: {xs: 13}}}>Time</TableCell>
  //             <TableCell align="center" sx={{ fontSize: {xs: 13}}}>Teams</TableCell>
  //             <TableCell align="center" sx={{ fontSize: {xs: 13}}}>Venue</TableCell>
  //           </TableRow>
  //         </TableHead>
  
  //         <TableBody>
  //           {dabaData.map(row => (
  
  //             <TableRow key={row.team} sx={{ border: 0}}>
  
  //               <TableCell sx={{ fontSize: {xs: 12}}}>{row.Date}</TableCell>
  //               <TableCell sx={{ fontSize: {xs: 12}}}>{row.Time}</TableCell>
  //               <TableCell align="center" sx={{ fontSize: {xs: 12}}}>{row.Teams}</TableCell>
  //               <TableCell align="center" sx={{ fontSize: {xs: 12}}}>{row.Venue}</TableCell>
                
  //             </TableRow>
  //           ))}
  //         </TableBody>
  
  
  //       </Table>
  
  //       </TableContainer>
  
  //     </Box>    
  
  //   )
  // }

}

export default FixturesData