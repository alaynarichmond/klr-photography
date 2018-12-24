import React from 'react';
import Photogrid from './Photogrid'

const Overview = ({ images }) => (
  <div>
    <p>Overview</p>
    <Photogrid images={images}/>
  </div>
);

export default Overview;
