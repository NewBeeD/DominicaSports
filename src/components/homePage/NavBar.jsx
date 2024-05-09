import { AppBar, Box, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, Grow, Hidden } from '@mui/material'
import SportsIcon from '@mui/icons-material/Sports';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import theme from '../../css/theme';

// Firebase
import { auth } from '../../config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth'

import '../../css/PointTable.css'




const NavBar = () => {

  // Handling the menu for smart-phones
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const menuDisplay = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null);
  };
  // End of menu display for smart phones

  // Larger displays menu setup
  const [anchorEl_Large, setAnchorEl_Large] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Google Authentication
  const [userSignedIn, setUserSignedIn] = useState(null)


  
  const handleClick = (event, button) => {
    setAnchorEl_Large(event.currentTarget);
    setSelectedButton(button);
  };

  const handleClose = () => {
    setAnchorEl_Large(null);
    setSelectedButton(null);
  };

  const buttonData = [
    { id: 1, label: 'DFA', menuItems: ['Home', 'Fixtures' ,'Table', 'Teams', 'Stats'] },
    { id: 2, label: 'DABA', menuItems: ['Home', 'Fixtures' ,'Table', 'Teams', 'Stats'] },
    { id: 3, label: 'DAVA', menuItems: ['Home', 'Teams', 'Stats'] },
    { id: 4, label: 'DNA', menuItems: ['Home', 'Teams', 'Stats'] },
  ];

  // End of larger display set up

  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setVisible(!isScrolledDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  useEffect(()=>{

    onAuthStateChanged(auth, (user) =>{

      if(user){

        setUserSignedIn(true)
      }
      else{
        setUserSignedIn(false)
      }
    })


  }, [])



  return (

    <Box >

      <AppBar elevation={2} sx={{backgroundColor: '#222629', position: 'fixed', top: 0, width: {xs:'100%'},  display: visible ? 'block' : 'none' }} >

        <Toolbar sx={{ display: {xs: 'flex'}, justifyContent: {xs:'space-between', sm: 'center'}}}>

          <Link to='/'>
            <IconButton sx={{ marginRight: {xs: '0', sm: '90px'}}}>
              <SportsIcon sx={{ color: '#86C232', fontSize: {xs:'40px'}, padding: 0}}/>
            </IconButton>
          </Link>


          <Stack direction='row' sx={{ display: {xs: 'none', sm: 'flex'}}} spacing={2}>


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

                        {/* <Link to={`/${button.label}/${item}`}>
                          {item}
                        </Link> */}
                        <Link className="hyperlinkactive" to={button.label === 'DFA' ?`/DFA/${item}`: button.label === 'DABA' ?`/DABA/${item}` :'/'} style={{ textDecoration: 'none', cursor: 'pointer'}}>
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
              <AccountCircleIcon style={{ color: 'white'}} sx={{ fontSize: {xs:'30px'}, padding: 0, display: {xs:'none', sm: 'initial'} }}/>
            </IconButton>
            
          </Stack>

          <Button 
          id='menu-button'
          aria-controls={open ? 'basic-menu': undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true': undefined}
          onClick={menuDisplay}
          sx={{ display: {sm: 'none'}}}
          >
            <MenuIcon style={{ color: '#86C232', fontSize: '28px'}}/>

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
            style: {
              width: '120px'
            }
          }}
                   
          >
            <Link to='/' style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>Home</MenuItem></Link>
            <Link to='/DFA/Home' style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>DFA</MenuItem></Link>
            <Link to='/DABA/Home' style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>DABA</MenuItem></Link>
            <Link to='/' style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>DAVA</MenuItem></Link>
            <Link to='/' style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>DNA</MenuItem></Link>
            <Link to='/' style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>MEDIA</MenuItem></Link>
            <Link to={userSignedIn?'/Profile': '/Login'} style={{ textDecoration: 'none'}}><MenuItem style={{ fontSize: '18px', color: `var(--color-color4, ${theme.colors.color4})` }} onClick={closeMenu}>{userSignedIn?'PROFILE': 'LOGIN'}</MenuItem></Link>

          </Menu>


        </Toolbar>
      </AppBar>
      <Box marginTop={7} />



    </Box>
  )
}

export default NavBar