import { Box } from "@mui/material"
import NavBar from "../components/homePage/NavBar"
import MainNews from "../components/homePage/MainNews"
import TrendingSection from "../components/homePage/TrendingSection"
import Points_Table from "../components/homePage/Points_Table"
import FixturesData from "../components/homePage/Fixtures"
import Footer from "../components/Footer/Footer"


const HomePage = () => {

  
  // const [leagueNames, setLeagueNames] = useState(['dfa', 'daba'])

  let first = 'first';
  let second = 'second';
  let third = 'third';


  return (

    <Box >

      <NavBar />
      <Box marginTop={7} />

      <Box width={{xs:'100%', sm: 800, md: 1200}} sx={{margin: {xs: 0, sm: 'auto'}}}>

        <MainNews />
        <TrendingSection level={first}/>
        <Box display={{ sm: 'none'}}>
          <FixturesData page='home' />
        </Box>
        <TrendingSection level={second}/>
        <Points_Table page='Homepage'/>
        <TrendingSection level={third}/>

      </Box>

      <Footer />
    </Box>
    
  )
}

export default HomePage