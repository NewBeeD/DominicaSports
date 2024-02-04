import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination , Paper, Box, Stack, Typography, Skeleton } from "@mui/material"

import { useState } from "react"
import { Link } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux';

import GetPoints from "../../modules/Homepage/PointsTables/PointsTableDataFetch";




function SortPoints(a, b) {
  return b.Points - a.Points;
}

const Points_Table = ({ page }) => {

  GetPoints();

  const premierTable_raw = useSelector((state) => state.points)
  const premierTable = premierTable_raw[0]

  // TODO: Set up this component to receive a page name and then do a request for the tables



  if(page === 'Homepage'){

    return (
    

      <Box marginTop={8} marginBottom={2} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center', border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>


        <Typography>League Standings</Typography>
  
       {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >

          <Table >

            <TableHead >
              <TableRow >
                <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Team</TableCell>
                <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Played</TableCell>
                {/* <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Wins</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Drawn</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Lost</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GF</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GA</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GD</TableCell> */}
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Points</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {premierTable.slice(0, 5).map(row => (

                <TableRow key={row.team} sx={{ border: 0}}>

                  <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Team}</TableCell>
                  <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Played}</TableCell>
                  {/* <TableCell align="center">{row.Won}</TableCell>
                  <TableCell align="center">{row.Drawn}</TableCell>
                  <TableCell align="center">{row.Lost}</TableCell>
                  <TableCell align="center">{row.GF}</TableCell>
                  <TableCell align="center">{row.GA}</TableCell>
                  <TableCell align="center">{row.GD}</TableCell> */}
                  <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Points}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>


            </Table>

            <Box>

              <Link to='/Table'>
                <Typography style={{ fontSize: 13, fontWeight: 'bold'}}  sx={{ textAlign: 'center', paddingY: {xs: '5px'}, backgroundColor: {xs: '#F9F9F9', sm: 'white'}, fontWeight: 900}}>
                  View Full Table
                </Typography>
              </Link>
            </Box>

        </TableContainer>: <Skeleton variant="rectangular" width={210} height={60} />}



      </Box>   

)


}

else if(page === 'dfa'){
return (

  <Box marginTop={8} marginBottom={2} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center', border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>


  <Typography>DFA Premier League Standings</Typography>


  {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >

      <Table >

        <TableHead >
          <TableRow >
            <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Team</TableCell>
            <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Played</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Wins</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Drawn</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Lost</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GF</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GA</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GD</TableCell>
            <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Points</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {premierTable.map(row => (

            <TableRow key={row.team} sx={{ border: 0}}>

              <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Team}</TableCell>
              <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Played}</TableCell>
              <TableCell align="center">{row.Won}</TableCell>
              <TableCell align="center">{row.Drawn}</TableCell>
              <TableCell align="center">{row.Lost}</TableCell>
              <TableCell align="center">{row.GF}</TableCell>
              <TableCell align="center">{row.GA}</TableCell>
              <TableCell align="center">{row.GD}</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Points}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>


        </Table>

    </TableContainer>: <Skeleton variant="rectangular" width={210} height={60} />}

</Box>  
)
  }

else if(page === 'daba'){
  return (
  
    <Box marginTop={8} marginBottom={2} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center', border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>
  
  
    <Typography>DFA Premier League Standings</Typography>
  
  
    {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
        <Table >
  
          <TableHead >
            <TableRow >
              <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Team</TableCell>
              <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Played</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Wins</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Drawn</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Lost</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GF</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GA</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GD</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Points</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {premierTable.map(row => (
  
              <TableRow key={row.team} sx={{ border: 0}}>
  
                <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Team}</TableCell>
                <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Played}</TableCell>
                <TableCell align="center">{row.Won}</TableCell>
                <TableCell align="center">{row.Drawn}</TableCell>
                <TableCell align="center">{row.Lost}</TableCell>
                <TableCell align="center">{row.GF}</TableCell>
                <TableCell align="center">{row.GA}</TableCell>
                <TableCell align="center">{row.GD}</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
  
  
          </Table>
          
      </TableContainer>: <Skeleton variant="rectangular" width={210} height={60} />}
  
  </Box>  
  )
    }

else if(page === 'dava'){
  return (
  
    <Box marginTop={8} marginBottom={2} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center', border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>
  
  
    <Typography>DFA Premier League Standings</Typography>
  
  
    {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
        <Table >
  
          <TableHead >
            <TableRow >
              <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Team</TableCell>
              <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Played</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Wins</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Drawn</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Lost</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GF</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GA</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GD</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Points</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {premierTable.map(row => (
  
              <TableRow key={row.team} sx={{ border: 0}}>
  
                <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Team}</TableCell>
                <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Played}</TableCell>
                <TableCell align="center">{row.Won}</TableCell>
                <TableCell align="center">{row.Drawn}</TableCell>
                <TableCell align="center">{row.Lost}</TableCell>
                <TableCell align="center">{row.GF}</TableCell>
                <TableCell align="center">{row.GA}</TableCell>
                <TableCell align="center">{row.GD}</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
  
  
          </Table>
          
      </TableContainer>: <Skeleton variant="rectangular" width={210} height={60} />}
  
  </Box>  
  )
    }

else if(page === 'dna'){
  return (
  
    <Box marginTop={8} marginBottom={2} width={{xs: '90%'}} sx={{ margin: 'auto', textAlign: 'center', border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>
  
  
    <Typography>DFA Premier League Standings</Typography>
  
  
    {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >
  
        <Table >
  
          <TableHead >
            <TableRow >
              <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Team</TableCell>
              <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Played</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Wins</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Drawn</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Lost</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GF</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GA</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>GD</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Points</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {premierTable.map(row => (
  
              <TableRow key={row.team} sx={{ border: 0}}>
  
                <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Team}</TableCell>
                <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Played}</TableCell>
                <TableCell align="center">{row.Won}</TableCell>
                <TableCell align="center">{row.Drawn}</TableCell>
                <TableCell align="center">{row.Lost}</TableCell>
                <TableCell align="center">{row.GF}</TableCell>
                <TableCell align="center">{row.GA}</TableCell>
                <TableCell align="center">{row.GD}</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
  
  
          </Table>
          
      </TableContainer>: <Skeleton variant="rectangular" width={210} height={60} />}
  
  </Box>  
  )
    }
  
}

export default Points_Table