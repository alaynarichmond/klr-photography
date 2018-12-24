import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import LazyLoading from 'common/components/LazyLoading'
import styles from '../style/index.css'
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Albums from './components/Albums';
import About from './components/About';
import Contact from './components/Contact';

const ExampleRouteHandler = LazyLoading(() => import('views/example'))

const Routes = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Route path='/' component={Navbar}/>
      <Switch>
        <Route path='/overview' component={Overview} />
        <Route path='/albums' component={Albums} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  </div>
);

export default Routes;
