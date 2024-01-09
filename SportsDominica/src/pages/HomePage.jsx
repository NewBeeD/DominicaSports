import { Box } from "@mui/material"
import NavBar from "../components/homePage/NavBar"
import MainNews from "../components/homePage/MainNews"
import TrendingSection from "../components/homePage/TrendingSection"
import Points_Table from "../components/homePage/Points_Table"
import FixturesData from "../components/homePage/Fixtures"

import { useState, useEffect } from "react"

const HomePage = () => {

  
  const [leagueNames, setLeagueNames] = useState(['dfa', 'daba'])
  const [counter, setCounter] = useState(0)

  
  
  
  useEffect(()=>{ 

    const intervalId = setInterval(()=> {

    
      setCounter((prevCount) => {

        if(prevCount < leagueNames.length-1){return prevCount + 1}
        else{return 0}
      })
      
    }, 4000)

    // Clean up the interval when components unmounts
    return () => clearInterval(intervalId)
  }, [])




  return (

    <Box >

      <NavBar />
      <MainNews />
      <TrendingSection />
      {leagueNames[counter] === 'dfa'? <Points_Table leagueName='dfa'/>: leagueNames[counter] === 'daba'? <Points_Table leagueName='daba'/>: ''}
      <FixturesData leagueName='dfa' />


    </Box>
    
  )
}

export default HomePage