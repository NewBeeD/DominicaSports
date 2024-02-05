import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination , Paper, Box, Stack, Typography, Skeleton, Button } from "@mui/material"

import NavBar from "../../components/homePage/NavBar"
import Points_Table from "../../components/homePage/Points_Table"

const LeagueStanding = () => {

  


  return (
    <Box >

      <NavBar />
      <Box marginTop={4} />
      <Points_Table page='dfa' />

      
    </Box>
  )
}

export default LeagueStanding