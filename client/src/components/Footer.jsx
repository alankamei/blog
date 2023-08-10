import React from 'react'
import logo from '../img/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const Footer = () => {
  return (
    <footer>
      {/*} <img src={logo} alt=""/>
  <span>Made with 🤍 and <b>React.js</b>.</span>*/}
  <div>
    <InstagramIcon/>
    <TwitterIcon/>
    <FacebookIcon/>
    <LinkedInIcon/>
  </div>
      <span> &copy;2023 @research&publish.com</span>
    </footer>
  )
}

export default Footer