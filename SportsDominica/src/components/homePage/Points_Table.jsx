import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination , Paper, Box, Stack, Typography } from "@mui/material"

import { useState } from "react"

import {dfa_premier_league} from  '../../assets/dfa_team_points.json' 
import {daba_premier_league} from '../../assets/daba_team_points.json'


function SortPoints(a, b) {
  return b.Points - a.Points;
}

const Points_Table = ({leagueName}) => {

  const [dfaData, setDfaData] = useState(dfa_premier_league.sort(SortPoints).slice(0, 5))
  const [dabaData, setDabaData] = useState(daba_premier_league.sort(SortPoints).slice(0, 5))
  const [title, setTitle] = useState(leagueName.toUpperCase())


  console.log(dfaData);


  if(leagueName === 'dfa'){

    return (

      <Box marginTop={8} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center'}}>
  
        <Typography>{title} Premier League Table</Typography>
  
        <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
        <Table sx={{ border: '1px solid black'}}>
  
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontSize: {xs: 13}}}>Team</TableCell>
              <TableCell sx={{ fontSize: {xs: 13}}}>Played</TableCell>
              {/* <TableCell align="center">Wins</TableCell>
              <TableCell align="center">Draws</TableCell>
              <TableCell align="center">Losses</TableCell>
              <TableCell align="center">GF</TableCell>
              <TableCell align="center">GA</TableCell>
              <TableCell align="center">GD</TableCell> */}
              <TableCell align="center" sx={{ fontSize: {xs: 13}}}>Points</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {dfaData.map(row => (
  
              <TableRow key={row.team} sx={{ border: 0}}>
  
                <TableCell sx={{ fontSize: {xs: 12}}}>{row.team}</TableCell>
                <TableCell sx={{ fontSize: {xs: 12}}}>{row.Played}</TableCell>
                {/* <TableCell align="center">{row.Won}</TableCell>
                <TableCell align="center">{row.Drawn}</TableCell>
                <TableCell align="center">{row.Lost}</TableCell>
                <TableCell align="center">{row.GF}</TableCell>
                <TableCell align="center">{row.GA}</TableCell>
                <TableCell align="center">{row.GD}</TableCell> */}
                <TableCell align="center" sx={{ fontSize: {xs: 12}}}>{row.Points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
  
  
        </Table>
  
        </TableContainer>
  
      </Box>   
  
    )

    
  }
  else if(leagueName === 'daba'){
    return (

      <Box width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center'}}>
  
        <Typography>{title} Premier League Table</Typography>
  
        <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
        <Table sx={{ border: '1px solid black'}}>
  
          <TableHead>
            <TableRow>
              <TableCell  sx={{ fontSize: {xs: 13}}}>Team</TableCell>
              <TableCell  sx={{ fontSize: {xs: 13}}}>Played</TableCell>
              {/* <TableCell align="center">Wins</TableCell>
              <TableCell align="center">Draws</TableCell>
              <TableCell align="center">Losses</TableCell>
              <TableCell align="center">GF</TableCell>
              <TableCell align="center">GA</TableCell>
              <TableCell align="center">GD</TableCell> */}
              <TableCell align="center"  sx={{ fontSize: {xs: 13}}}>Points</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {dabaData.map(row => (
  
              <TableRow key={row.team} sx={{ border: 0}}>
  
                <TableCell sx={{ fontSize: {xs: 12}}}>{row.team}</TableCell>
                <TableCell sx={{ fontSize: {xs: 12}}}>{row.Played}</TableCell>
                {/* <TableCell align="center">{row.Won}</TableCell>
                <TableCell align="center">{row.Drawn}</TableCell>
                <TableCell align="center">{row.Lost}</TableCell>
                <TableCell align="center">{row.GF}</TableCell>
                <TableCell align="center">{row.GA}</TableCell>
                <TableCell align="center">{row.GD}</TableCell> */}
                <TableCell align="center" sx={{ fontSize: {xs: 12}}}>{row.Points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
  
  
        </Table>
  
        </TableContainer>
  
      </Box>   
  
    )
  }


  
}

export default Points_Table