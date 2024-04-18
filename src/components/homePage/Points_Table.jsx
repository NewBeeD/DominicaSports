import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination , Paper, Box, Stack, Typography, Skeleton } from "@mui/material"

import { useState } from "react"
import { Link } from "react-router-dom";
import '../../css/PointTable.css'

import theme from "../../css/theme";

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

  const getVideoDimensions = () => {
    const windowWidth = window.innerWidth;

    // Adjust these values based on your layout and design preferences
    if (windowWidth >= 500) {
      return {window_width: 500}
    } else if (windowWidth >= 420) {
      return {window_width: 420}
    }else if (windowWidth >= 400) {
      return {window_width: 400}
    }else if (windowWidth >= 390) {
      return {window_width: 390}
    }else if (windowWidth >= 350) {
      return {window_width: 350}
    }
    else if (windowWidth >= 300) {
      return {window_width: 300}
    } 
    else {
      return {window_width: 280}
    }
    
  };

  const { window_width } = getVideoDimensions();



  // TODO: Set up this component to receive a page name and then do a request for the tables



  if(page === 'Homepage'){

    return (
    

      <Box marginTop={8} marginBottom={2} width={{xs: '98%', sm: '700px'}} sx={{ margin: 'auto', textAlign: 'center', border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>


        <Typography>League Standings</Typography>
  
       {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 1}}} >

          <Table >

            <TableHead >
              <TableRow >
                <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Team</TableCell>
                <TableCell sx={{ fontSize: {xs: 13}, fontWeight: 900}}>P</TableCell>
                <TableCell align="center" sx={{ fontSize: {xs: 13}, fontWeight: 900}}>Pts</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {premierTable.slice(0, 5).map(row => (

                <TableRow key={row.team} sx={{ border: 0}}>

                  <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Team}</TableCell>
                  <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Played}</TableCell>
                  <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 'bold'}}>{row.Points}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>


            </Table>

            <Box>

              <Link to='DFA/Table'>
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

  <Box marginTop={8} marginBottom={2} width={{xs: '100%', sm: 900}} sx={{ margin: 'auto', textAlign: 'center',  borderRadius: {xs: '4px'}}}>


  <Typography sx={{ fontWeight: 900, paddingTop: {xs: 1,sm: 16}}}>DFA Premier League Standings</Typography>


  {premierTable ? <TableContainer component={Paper} sx={{ marginTop: {xs: 2}}} >

      <Table >

        <TableHead sx={{ backgroundColor: `var(--color-color2, ${theme.colors.color2})`}}>
          <TableRow>
            {/* <TableCell sx={{ fontSize: {xs: 8}, fontWeight: 900}}>Pos</TableCell> */}
            <TableCell width={window_width < 290?110: 60} sx={{ fontSize: {xs: 11}, fontWeight: 900, textAlign:'left'}}>Pos</TableCell>
            <TableCell width={window_width < 290?110: 200} sx={{ fontSize: {xs: 11}, fontWeight: 900, textAlign:'left'}}>Club</TableCell>
            <TableCell  width={window_width < 290?110: 60} sx={{ fontSize: {xs: 11}, fontWeight: 900, paddingX: 0, textAlign: 'center'}}>P</TableCell>
            <TableCell  width={window_width < 290?110: 60} align="center" sx={{ fontSize: {xs: 11}, fontWeight: 900, paddingX: 0}}>W</TableCell>
            <TableCell  width={window_width < 290?110: 60} align="center" sx={{ fontSize: {xs: 11}, fontWeight: 900, paddingX: 0}}>D</TableCell>
            <TableCell  width={window_width < 290?110: 60} align="center" sx={{ fontSize: {xs: 11}, fontWeight: 900, paddingX: 0}}>L</TableCell>
            <TableCell  width={window_width < 290?110: 60} align="center" sx={{ fontSize: {xs: 11}, fontWeight: 900, paddingX: 0}}>GD</TableCell>
            <TableCell  width={window_width < 290?110: 60} align="center" sx={{ fontSize: {xs: 11}, fontWeight: 900, paddingX: 0}}>Pts</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {premierTable.map((row, idx) => (

            <TableRow key={idx} sx={{ border: 0}}>

              <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, paddingleft:10, textAlign: 'left'}}>{idx + 1}.</TableCell>

              <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5, fontWeight: 900, paddingLeft:0.5, textAlign: 'left', }}>

                <Link className="hyperlinkactive" to={`/DFA/Home/Team/${row.ID}`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'black'}}>
                  {window_width < 290?row.Team_Abbrev: row.Team}
                </Link>
                                
                </TableCell>

              <TableCell sx={{ fontSize: {xs: 12}, paddingY: 0.5,  paddingX:0, textAlign: 'center'}}>{row.Played}</TableCell>

              <TableCell align="center" sx={{ paddingX: 0, textAlign: 'center', fontSize: {xs: 12}}}>{row.Won}</TableCell>

              <TableCell align="center" sx={{ paddingX: 0, fontSize: {xs: 12}}}>{row.Drawn}</TableCell>
              <TableCell align="center" sx={{ paddingX: 0, fontSize: {xs: 12}}}>{row.Lost}</TableCell>

              <TableCell align="center" sx={{ paddingX: 0, fontSize: {xs: 12}, }}>{row.GD}</TableCell>
              <TableCell align="center" sx={{ fontSize: {xs: 12}, paddingY: 0.5,  paddingX: 0, fontWeight: 900}}>{row.Points}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>


        </Table>

    </TableContainer>: <Skeleton variant="rectangular" width={210} height={60} />}

    <Box marginTop={8} />

</Box>  
)
  }

  

  
}

export default Points_Table