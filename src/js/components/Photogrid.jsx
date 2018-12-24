import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';


const Photogrid = ({ images }) => (
  <GridList>
    {
      images.map(image => (
        <GridListTile key={image.id}>
          <Link to={'/photo/' + image.id}>
            <img src={image.url}/>
          </Link>
        </GridListTile>
      ))
    }
  </GridList>
);

export default Photogrid;
