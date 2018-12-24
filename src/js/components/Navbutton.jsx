import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

const Navbutton = ({ path, children}) => (
  <NavLink to={path}>
    <Button>
      {children}
    </Button>
  </NavLink>
);

export default Navbutton;
