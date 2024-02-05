import { AppBar, Box, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, Grow, Hidden } from '@mui/material'
import SportsIcon from '@mui/icons-material/Sports';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom';

import { useState } from 'react';



const NavBar = () => {

  // Handling the menu for smart-phones
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const menuDisplay = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null);
  };
  // End of menu display for smart phones

  // Larger displays menu setup
  const [anchorEl_Large, setAnchorEl_Large] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (event, button) => {
    setAnchorEl_Large(event.currentTarget);
    setSelectedButton(button);
  };

  const handleClose = () => {
    setAnchorEl_Large(null);
    setSelectedButton(null);
  };

  const buttonData = [
    { id: 1, label: 'DFA', menuItems: ['Home', 'Premier League', 'First Division', 'Women League', 'Tables', 'Teams', 'Stats'] },
    { id: 2, label: 'DABA', menuItems: ['Home', 'Premier League', 'First Division', 'Women League', 'Teams', 'Stats'] },
    { id: 3, label: 'DAVA', menuItems: ['Home', 'Men League', 'Women League', 'Teams', 'Stats'] },
    { id: 4, label: 'DNA', menuItems: ['Home', 'Teams', 'Stats'] },
  ];

  // End of larger display set up





  return (

    <Box >

      <AppBar position='static' elevation={2} sx={{ backgroundColor: {xs: '#26249B', sm: 'black'} }}>

        <Toolbar sx={{ display: {xs: 'flex'}, justifyContent: {xs:'space-between', sm: 'center'}}}>

          <Link to='/'>
            <IconButton sx={{ marginRight: {xs: '0', sm: '90px'}}}>
              <SportsIcon sx={{ color: 'white', fontSize: {xs:'40px'}, padding: 0}}/>
            </IconButton>
          </Link>


          <Stack direction='row' sx={{ display: {xs: 'none', sm: 'flex'}}} spacing={2}>

            {/* <Button sx={{ color: 'white' }}endIcon={<KeyboardArrowDownIcon />}>DFA</Button>
            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DABA</Button>
            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DAVA</Button>
            <Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>DNA</Button>
            <Button sx={{ color: 'white' }}>MEDIA</Button> */}

            {buttonData.map((button) => (

              <Box key={button.id}>

                <Button onClick={(event) => handleClick(event, button)} endIcon={<KeyboardArrowDownIcon style={{ color: 'white'}} />}>
                  {button.label}
                </Button>

                  <Menu
                    anchorEl={anchorEl_Large}
                    open={Boolean(anchorEl_Large && selectedButton && selectedButton.id === button.id)}
                    onClose={handleClose}
                  >
                    {button.menuItems.map((item, index) => (
                      
                      <MenuItem key={index} onClick={handleClose}>

                        <Link to={`/${button.label}/${item}`}>
                          {item}
                        </Link>

                      </MenuItem>
                    ))}
                  </Menu>
                  
              </Box>
            ))}

          </Stack>

          <Stack>

            <IconButton sx={{ marginLeft: {xs: '0', sm: '90px'}}}>
              <AccountCircleIcon sx={{ color: 'white', fontSize: {xs:'30px'}, padding: 0, display: {xs:'none', sm: 'initial'} }}/>
            </IconButton>
            
          </Stack>

          <Button 
          id='menu-button'
          aria-controls={open ? 'basic-menu': undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true': undefined}
          onClick={menuDisplay}
          sx={{ display: {sm: 'none'} }}
          >
            <MenuIcon style={{ color: 'white'}}/>

          </Button>

          <Menu
          id='menu-button'
          anchorEl={anchorEl}
          open={open}
          onClose={closeMenu}
          TransitionComponent={Grow}
          transitionDuration={250}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
          slotProps={{
            paper: {

            }
          }}          
          >
            <Link to='/'><MenuItem onClick={closeMenu}>Home</MenuItem></Link>
            <Link to='/DFA/Home'><MenuItem onClick={closeMenu}>DFA</MenuItem></Link>
            <Link to='/DABA/Home'><MenuItem onClick={closeMenu}>DABA</MenuItem></Link>
            <Link to='/DAVA/Home'><MenuItem onClick={closeMenu}>DAVA</MenuItem></Link>
            <Link to='/DNA/Home'><MenuItem onClick={closeMenu}>DNA</MenuItem></Link>
            <Link to='/Media'><MenuItem onClick={closeMenu}>MEDIA</MenuItem></Link>
            <Link to='/Profile'><MenuItem onClick={closeMenu}>PROFILE</MenuItem></Link>

          </Menu>


        </Toolbar>
      </AppBar>



    </Box>
  )
}

export default NavBar