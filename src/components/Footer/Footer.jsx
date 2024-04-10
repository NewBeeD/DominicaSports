import { Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import theme from "../../css/theme"


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {  IconButton} from '@mui/material'

const Footer = () => {


  return (

    <footer >
      <Container maxWidth="sm" >
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} DSport
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <IconButton  color="inherit" aria-label="instagram" href="">
            <InstagramIcon />
          </IconButton>
          <IconButton  color="inherit" aria-label="facebook" href="">
            <FacebookIcon />
          </IconButton>
          <IconButton  color="inherit" aria-label="twitter" href="">
            <XIcon />
          </IconButton>
          <IconButton  color="inherit" aria-label="email" href="mailto:danieldanphil@gmail.com">
            <EmailIcon />
          </IconButton>

        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" >
          {'Site by '}
          <Link color="inherit" style={{ textDecoration: 'none'}}>
            Danphil Daniel
          </Link>
          
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer