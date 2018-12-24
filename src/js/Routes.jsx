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
import SinglePhoto from './components/SinglePhoto';


const images = [
  {
    url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1',
    id: 0
  },
  {
    url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg',
    id: 1
  },
  {
    url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13002253/GettyImages-521536928-_1_.jpg',
    id: 2
  },
  {
    url: 'https://timedotcom.files.wordpress.com/2018/04/service-dogs-disneyland.jpg?quality=85',
    id: 3
  },
  {
    url: 'https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg',
    id: 4
  },
  {
    url: 'https://d2pu2bk1b66iw6.cloudfront.net/photos/2015/02/24/6-94262-dog-licking-pb-spoon-1424816145.jpg',
    id: 5
  },
  {
    url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Why%20dogs%20eat%20grass_0.jpg?itok=fu5yHnol',
    id: 6
  },
  {
    url: 'http://www.pethealthnetwork.com/sites/default/files/thyroid-dogs177494230.jpg',
    id: 7
  },
  {
    url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg',
    id: 8
  },
  {
    url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg',
    id: 9
  },
  {
    url: 'https://qph.fs.quoracdn.net/main-qimg-0cba2223014af24f9f1508613f15b7eb',
    id: 10
  }
]

const Routes = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Route path='/' component={Navbar}/>
      <Switch>
        <Route path='/overview' render={(props) => (<Overview {...props} images={images}/>)} />
        <Route path='/albums' component={Albums} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/photo/:photoId' render={(props) => (<SinglePhoto {...props} images={images}/>)} />
      </Switch>
    </div>
  </div>
);

export default Routes;
