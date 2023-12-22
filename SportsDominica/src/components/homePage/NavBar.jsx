import { AppBar, Box, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import SportsIcon from '@mui/icons-material/Sports';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const NavBar = () => {



  return (

    <Box sx={{ flexGrow: 1,  display: 'flex', justifyContent: 'center' }}>

      <AppBar position='static' elevation={2} sx={{ backgroundColor: {xs: '#26249B', sm: 'black'} }}>

        <Toolbar sx={{ display: {xs: 'flex'}, justifyContent: {xs:'space-between', sm: 'space-evenly'}}}>

          <IconButton>
            <SportsIcon sx={{ color: 'white', fontSize: {xs:'40px'}, padding: 0}}/>
          </IconButton>

          <Stack direction='row' sx={{ display: {xs: 'none', sm: 'initial'}}} spacing={3}>

            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DFA</Button>
            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DABA</Button>
            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DAVA</Button>
            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DNA</Button>
            <Button sx={{ color: 'white' }}>MEDIA</Button>

          </Stack>

          <Stack>

            <IconButton>
              <AccountCircleIcon sx={{ color: 'white', fontSize: {xs:'30px'}, padding: 0, display: {xs:'none', sm: 'initial'} }}/>
            </IconButton>
            
          </Stack>

          <MenuIcon sx={{ display: {sm: 'none'}}}/>

        </Toolbar>
      </AppBar>



    </Box>
  )
}

export default NavBar