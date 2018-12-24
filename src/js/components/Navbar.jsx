import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbutton from './Navbutton';


const NavBar = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Typography variant = 'h5'>
        KLR Photography
      </Typography>
      <Navbutton path='/overview'>
        Overview
      </Navbutton>
      <Navbutton path='/albums'>
        Albums
      </Navbutton>
      <Navbutton path='/about'>
        About
      </Navbutton>
      <Navbutton path='/contact'>
        Contact
      </Navbutton>
    </Toolbar>
  </AppBar>
);

export default NavBar;
