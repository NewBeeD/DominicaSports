import NavBar from "../../components/homePage/NavBar"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from "react-router-dom";

import { useState } from "react"


import '../../css/DfaMainPage.css'

import { Link } from "react-router-dom";

import theme from "../../css/theme";


// Redux
import { useSelector } from 'react-redux';
import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton, Divider, Menu, MenuItem, Paper, FormControl, Select, InputLabel } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

import GetDFA from "../../modules/DFA/AllDfaData";

import DfaArticles from "../../components/DFAPage/DfaArticles";
import Points_Table from "../../components/homePage/Points_Table";
import MainNews from "../../components/homePage/MainNews";
import Video from "../../components/Video";
import BottomNav from "../../components/DFAPage/BottomNav";
import FixturesData from "../../components/homePage/Fixtures"

import playStatCleanUp from '../../modules/DFA/PlayerStats/PlayerStatsCleanUp'
import TeamGoalsStructure from '../../modules/DFA/PlayerStats/MostTeamGoals'

// Icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';






// TODO: For fixtures, filter out ucoming fixtures


const DFA = () => {

  GetDFA()

  let all_team_fixtures = useSelector((state) => state.fixtures)
  let div_one_table = useSelector((state) => state.DivOneTable)
  let women_table = useSelector((state) => state.WomenTable)
  let prem_table = useSelector((state) => state.points)
  let players = useSelector((state) => state.DfaPlayers)
  let player_stats = useSelector((state) => state.DfaPlayerStats)

  let team_most_goals = player_stats && player_stats.length > 0 ? TeamGoalsStructure(player_stats[0]): []

  player_stats = player_stats && player_stats.length > 0 ? playStatCleanUp(player_stats[0]): [];



 

  const navigate = useNavigate()  
  const [page, setPage] = useState('home')
  const [team, setTeam] = useState('CCCUL Dublanc FC');

  const [type, setType] = useState('now')
  
  const handleChange = (event) => {

    setTeam(event.target.value);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState('Men');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (choice) => {
    setSelectedChoice(choice);
    setAnchorEl(null);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFixturesClick = () => {

    switch(selectedChoice){

      case 'Men':
        setPage('fixtures_men');
        break;
      
      case 'Women':
        setPage('fixtures_women')
        break;
      
      case 'div 1':
        setPage('fixtures_div_1')
      
    }
  }

  const handleTableClick = () => {

    switch(selectedChoice){

      case 'Men':
        setPage('tables_men');
        break;
      
      case 'Women':
        setPage('tables_women')
        break;
      
      case 'div 1':
        setPage('tables_div_1')
      
    }
  }

  const handleStatsClick = () => {

    switch(selectedChoice){

      case 'Men':
        setPage('stats_men');
        break;
      
      case 'Women':
        setPage('stats_women')
        break;
      
      case 'div 1':
        setPage('stats_div_1')
      
    }
  }
  const handlePlayersClick = () => {

    switch(selectedChoice){

      case 'Men':
        setPage('players_men');
        break;
      
      case 'Women':
        setPage('players_women')
        break;
      
      case 'div 1':
        setPage('players_div_1')
      
    }
  }



  

  // GetArticles()

  // let articles = useSelector((state) => state.articles)
  // articles = articles[0]

  // 6mfXc8gw9mA

  if(page == 'home'){

    return (
      <>
  
      <NavBar />
      <Typography style={{ color: `var(--color-color2, ${theme.colors.color2})`}} marginTop={{xs: 1}} marginBottom={{xs: 2}} variant="h5" sx={{ textAlign: 'center', fontWeight: 900}}>Dominica Football Association</Typography>
      {/* <MainNews /> */}
      <Box marginTop={5} />
      <DfaArticles level='first' />
      <Video video_id ='XbVCw17Ks6E'/>
      <Box marginY={1.5} />
      {/* <Points_Table page='Homepage'/> */}
      <DfaArticles level='second' />
      <Box marginY={1.5} />
      {/* <FixturesData /> */}
      <DfaArticles level='third' />
      <Video video_id ='DUFpVvH-4CY'/>
      <Box height={{xs:50}} marginY={1} />
      {/* <BottomNav /> */}
  
      <Paper sx={{ width: '100%', height: '50px', position: 'fixed', bottom: 0, display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', backgroundColor: '#060506'}}>
  
        <Stack justifyContent='center' alignItems='center' direction='row' spacing={1.8}>

  
          <Box>
            <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            endIcon={<KeyboardArrowUpIcon style={{ color: 'white'}} />}
            style={{ textTransform: 'capitalize', fontSize: '12px', color: 'white', padding: '0px'}}
            size='small'>
              {selectedChoice}
            </Button>
  
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top', // Position of the anchor element
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom', // Position of the menu
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick('Men')}>Men</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Women')}>Women</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Div 1')}>Division 1</MenuItem>
            </Menu>
          </Box>
  
          <Box>
            <Button onClick={() => handleFixturesClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Fixtures</Typography>
            </Button>
          </Box>
  
          
  
          <Box>
            <Button onClick={() => handleTableClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Tables</Typography>
            </Button>
          </Box>

          <Box>
            <Button onClick={() => handleStatsClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Stats</Typography>
            </Button>
          </Box>
  
          <Box>
            <Button onClick={() => handlePlayersClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Players</Typography>
            </Button>
          </Box>
  
  
        </Stack>
  
      </Paper>
      
      </>
    )

  }
  else if(selectedChoice == 'Men' && page == 'fixtures_men'){

    return (
      <>
  
      <NavBar />
      <FixturesData page='dfa' type={type}/>

      
      <Stack justifyContent='center' direction='row' marginTop={7} >

        {type != 'now' ? <Button variant="outlined" onClick={() => setType('now')} size="small">
          Upcoming Fixtures
        </Button>: ''}

        {type != 'past' ? <Button variant="outlined" onClick={() => setType('past')} size="small">
          Past Results
        </Button>: ''}
      </Stack>

      <Box marginTop={8} />
     
  
      <Paper sx={{ width: '100%', height: '50px', position: 'fixed', bottom: 0, display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', backgroundColor: '#060506'}}>
  
        <Stack justifyContent='center' alignItems='center' direction='row' spacing={1.8}>
  
          <Box>
            <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            endIcon={<KeyboardArrowUpIcon style={{ color: 'white'}} />}
            style={{ textTransform: 'capitalize', fontSize: '12px', color: 'white', padding: '0px'}}
            size='small'>
              {selectedChoice}
            </Button>
  
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top', // Position of the anchor element
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom', // Position of the menu
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick('Men')}>Men</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Women')}>Women</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Div 1')}>Division 1</MenuItem>
            </Menu>
          </Box>
  
          <Box>
            <Button onClick={() => handleFixturesClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Fixtures</Typography>
            </Button>
          </Box>
  
          
  
          <Box>
            <Button onClick={() => handleTableClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Tables</Typography>
            </Button>
          </Box>

          <Box>
            <Button onClick={() => handleStatsClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Stats</Typography>
            </Button>
          </Box>
  
          <Box>
            <Button onClick={() => handlePlayersClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Players</Typography>
            </Button>
          </Box>
  
  
        </Stack>
  
      </Paper>
      
      </>
    )

  }
  else if(selectedChoice == 'Men' && page == 'tables_men'){

    return (
      <>
  
      <NavBar />

      <Points_Table page='dfa' />
      
  
      <Paper sx={{ width: '100%', height: '50px', position: 'fixed', bottom: 0, display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', backgroundColor: '#060506'}}>
  
        <Stack justifyContent='center' alignItems='center' direction='row' spacing={1.8}>
  
          <Box>
            <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            endIcon={<KeyboardArrowUpIcon style={{ color: 'white'}} />}
            style={{ textTransform: 'capitalize', fontSize: '12px', color: 'white', padding: '0px'}}
            size='small'>
              {selectedChoice}
            </Button>
  
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top', // Position of the anchor element
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom', // Position of the menu
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick('Men')}>Men</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Women')}>Women</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Div 1')}>Division 1</MenuItem>
            </Menu>
          </Box>
  
          <Box>
            <Button onClick={() => handleFixturesClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Fixtures</Typography>
            </Button>
          </Box>
  
          
  
          <Box>
            <Button onClick={() => handleTableClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Tables</Typography>
            </Button>
          </Box>

          <Box>
            <Button onClick={() => handleStatsClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Stats</Typography>
            </Button>
          </Box>
  
          <Box>
            <Button onClick={() => handlePlayersClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Players</Typography>
            </Button>
          </Box>
  
  
        </Stack>
  
      </Paper>
      
      </>
    )

  }
  else if(selectedChoice == 'Men' && page == 'stats_men'){

    return (
      <>
  
      <NavBar />
       

        {player_stats && player_stats.length > 0 ? 

          (<Box sx={{ backgroundColor: '#3C4552'}}>

            <Stack spacing={1} justifyContent='center' direction='row' paddingTop={2}>

            
                  <Paper sx={{ marginTop: {xs: 10}}}>

                    <Link to='/DFA/Home/PlayerGoals' style={{ textDecoration: 'none'}}>

                      <Card>
                        
                        <CardMedia
                        component="img"
                        image={player_stats[0].top_scorer_prem_url} 
                        sx={{ width: {xs: 165} }}
                        />

                        <CardContent style={{ textAlign: 'center'}}>

                          <Typography sx={{ fontWeight: 'bold'}}>
                            Goals
                          </Typography>

                          <Typography variant="h4" sx={{ fontWeight: 'bold'}}>
                            {player_stats[0].top_scorer_prem_goals}
                          </Typography>

                        </CardContent>

                      </Card>

                    </Link>
                  
                  </Paper>


                <Paper sx={{ marginTop: {xs: 10}}}>

                  <Link to='/DFA/Home/PlayerAssists' style={{ textDecoration: 'none'}}>
                    <Card>
                      
                      <CardMedia
                      component="img"
                      image={player_stats[0].top_assist_prem_url} 
                      sx={{ width: {xs: 165} }}
                      />

                      <CardContent style={{ textAlign: 'center'}}>

                        <Typography sx={{ fontWeight: 'bold'}}>
                          Assists
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 'bold'}}>
                          {player_stats[0].top_assist_prem_assist}
                        </Typography>

                      </CardContent>

                    </Card>
                  
                  </Link>


                </Paper>
                
            </Stack>

            <Stack spacing={1} justifyContent='center' direction='row' marginTop={2} paddingBottom={1}>

              <Paper sx={{ marginTop: {xs: 10}}}>

                <Link to='/DFA/Home/TeamGoals' style={{ textDecoration: 'none'}}>
                  <Card>
                    
                    <CardMedia
                    component="img"
                    image={player_stats[0].top_scorer_prem_url} 
                    sx={{ width: {xs: 165} }}
                    />

                    <CardContent style={{ textAlign: 'center'}}>

                      <Typography sx={{ fontWeight: 'bold'}}>
                        Team Goals
                      </Typography>

                      <Typography variant="h4" sx={{ fontWeight: 'bold'}}>
                        {team_most_goals[0].totalGoals}
                      </Typography>

                    </CardContent>

                  </Card>
                </Link>
              
              </Paper>


              <Paper sx={{ marginTop: {xs: 10}}}>

                <Link to='/DFA/Home/TeamCleanSheets' style={{ textDecoration: 'none'}}>
                  <Card>

                  <CardMedia
                  component="img"
                  image={player_stats[0].top_clean_sheet_prem_url} 
                  sx={{ width: {xs: 165} }}
                  />

                  <CardContent style={{ textAlign: 'center'}}>

                    <Typography sx={{ fontWeight: 'bold'}}>
                      Clean Sheets
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 'bold'}}>
                      {player_stats[0].top_clean_sheet_prem_clean_sheets}
                    </Typography>

                  </CardContent>

                  </Card>
                </Link>


              </Paper>

            </Stack>
            
          </Box>)
        
          : <Skeleton width={300} height={300} sx={{ margin: 'auto'}}/>
        }

        <Stack marginTop={4} marginX={2} >

          <Stack justifyContent='space-between' direction='row'>

            <Typography>Season Stats</Typography>
            <ArrowRightAltIcon />

          </Stack>

            
        </Stack>

        <Box marginTop={8} />






            
  
      <Paper sx={{ width: '100%', height: '50px', position: 'fixed', bottom: 0, display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', backgroundColor: '#060506'}}>
  
        <Stack justifyContent='center' alignItems='center' direction='row' spacing={1.8}>
  
          <Box>
            <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            endIcon={<KeyboardArrowUpIcon style={{ color: 'white'}} />}
            style={{ textTransform: 'capitalize', fontSize: '12px', color: 'white', padding: '0px'}}
            size='small'>
              {selectedChoice}
            </Button>
  
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top', // Position of the anchor element
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom', // Position of the menu
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick('Men')}>Men</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Women')}>Women</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Div 1')}>Division 1</MenuItem>
            </Menu>
          </Box>
  
          <Box>
            <Button onClick={() => handleFixturesClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Fixtures</Typography>
            </Button>
          </Box>
  
          
  
          <Box>
            <Button onClick={() => handleTableClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Tables</Typography>
            </Button>
          </Box>

          <Box>
            <Button onClick={() => handleStatsClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Stats</Typography>
            </Button>
          </Box>
  
          <Box>
            <Button onClick={() => handlePlayersClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Players</Typography>
            </Button>
          </Box>
  
  
        </Stack>
  
      </Paper>
      
      </>
    )

  }
  else if(selectedChoice == 'Men' && page == 'players_men'){

    return (
      <>
  
      <NavBar />

      <Stack marginTop={2} direction='row' justifyContent='center' alignContent='center'>

        {/* Choose team */}
        <Box>
          
          {selectedChoice == 'Men'? 
          (<FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Team</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={team}
                onChange={handleChange}
                autoWidth
                label="Team"
              >
                <MenuItem value={'CCCUL Dublanc FC'}>Dublanc Fc</MenuItem>
                <MenuItem value={'Bombers FC'}>Bombers FC</MenuItem>
                <MenuItem value={'Blue Waters Bath Estate FC'}>Bathestate FC</MenuItem>
                <MenuItem value={'Connect 767 East Central FC'}>East Central FC</MenuItem>
                <MenuItem value={'We United FC'}>We United FC</MenuItem>
                <MenuItem value={'Mahaut Soca Strikers FC'}>Mahaut FC</MenuItem>
                <MenuItem value={'Petro Caribe Point Michel FC'}>Point Michel FC</MenuItem>
                <MenuItem value={'Promex Harlem FC'}>Harlem FC</MenuItem>
                <MenuItem value={'Sagicor South East FC'}>South East FC</MenuItem>
                <MenuItem value={'Tranquility Beach Middleham United FC'}>Middleham FC</MenuItem>
              </Select>
          </FormControl>):selectedChoice == 'Women'? 
          
          (<FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Team</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={team}
                onChange={handleChange}
                autoWidth
                label="Team"
              >
                <MenuItem value={1}>Goodwill Runner FC</MenuItem>
                <MenuItem value={2}>Bombers FC</MenuItem>
                <MenuItem value={3}>Mahaut Soca Strikers</MenuItem>
                <MenuItem value={4}>Dublanc FC</MenuItem>
                <MenuItem value={5}>Kalinago Warriors FC</MenuItem>
                <MenuItem value={6}>Mighty Avengers FC</MenuItem>
                <MenuItem value={7}>Harlem United FC</MenuItem>
                <MenuItem value={8}>All Saints FC</MenuItem>
                <MenuItem value={9}>Wooty Blazers FC</MenuItem>
                <MenuItem value={10}>Middleham FC</MenuItem>
              </Select>
          </FormControl>): 'First Division Team'}
          
        </Box>

      </Stack>

      

      {players.length > 0 ? players[0].filter(item => item.Current_Team == team && item.League === 'DFA').map((item, idx) => {

        return (
          <Paper  key={idx} sx={{ width: {xs: '93%'}, height: {xs: '100px'}, margin: 'auto', textDecoration: 'none'}}>

            <Link to={`/DFA/Home/Player/${item.id}`} style={{ textDecoration: 'none'}}>

              <Card style={{ height: '100%'}}  sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2}}>
              
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>

                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {item.FirstName}
                  </Typography>

                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {item.Last_Name}
                  </Typography>

                  <Typography variant="caption" color="text.secondary" component="div">
                    {item.Position}
                  </Typography>

                </CardContent>

              </Box>

              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image={item.url}
              />

              </Card>
            
            </Link>

            
          </Paper>
        )
      }): <Skeleton />}

      <Box marginTop={7} />
      
  
      <Paper sx={{ width: '100%', height: '50px', position: 'fixed', bottom: 0, display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', backgroundColor: '#060506'}}>
  
        <Stack justifyContent='center' alignItems='center' direction='row' spacing={1.8}>
  
          <Box>
            <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            endIcon={<KeyboardArrowUpIcon style={{ color: 'white'}} />}
            style={{ textTransform: 'capitalize', fontSize: '12px', color: 'white', padding: '0px'}}
            size='small'>
              {selectedChoice}
            </Button>
  
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top', // Position of the anchor element
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom', // Position of the menu
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick('Men')}>Men</MenuItem>
              {/* <MenuItem onClick={() => handleMenuItemClick('Women')}>Women</MenuItem> */}
              <MenuItem >Women</MenuItem>
              {/* <MenuItem onClick={() => handleMenuItemClick('Div 1')}>Division 1</MenuItem> */}
              <MenuItem >Division 1</MenuItem>
            </Menu>
          </Box>
  
          <Box>
            <Button onClick={() => handleFixturesClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Fixtures</Typography>
            </Button>
          </Box>
  
          
  
          <Box>
            <Button onClick={() => handleTableClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Tables</Typography>
            </Button>
          </Box>

          <Box>
            <Button onClick={() => handleStatsClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Stats</Typography>
            </Button>
          </Box>
  
          <Box>
            <Button onClick={() => handlePlayersClick()} size='small' style={{ textTransform: 'capitalize',  padding: 0, minWidth: 'inherit' }}>
              <Typography style={{ fontSize: '12px', fontWeight: 'bold', color: 'white'}}>Players</Typography>
            </Button>
          </Box>
  
  
        </Stack>
  
      </Paper>
      
      </>
    )

  }
 
}

export default DFA