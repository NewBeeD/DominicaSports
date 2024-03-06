import { Box } from "@mui/material"
import NavBar from "../components/homePage/NavBar"
import MainNews from "../components/homePage/MainNews"
import TrendingSection from "../components/homePage/TrendingSection"
import Points_Table from "../components/homePage/Points_Table"
import FixturesData from "../components/homePage/Fixtures"


const HomePage = () => {

  
  // const [leagueNames, setLeagueNames] = useState(['dfa', 'daba'])

  let first = 'first';
  let second = 'second';
  let third = 'third';


  return (

    <Box >

      <NavBar />
      <Box marginTop={7} />
      <MainNews />
      <TrendingSection level={first}/>
      <FixturesData page='home' />
      <TrendingSection level={second}/>
      <Points_Table page='Homepage'/>
      <TrendingSection level={third}/>


    </Box>
    
  )
}

export default HomePage