import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyWork from './pages/my-work';
import About from './pages/about'
import Contact from './pages/contact'
import PageNotFound from './pages/404'
import Cover from './components/cover';
import Menu from './components/menu';
import Footer from './components/footer';

const Routes = (
    <Router>
      <div className="site-wrapper">
  
        <Cover 
          imageUrl="https://www.s-andersson.se/images/IMG_1394.jpg" 
          strings={['Hello! My name is Simon Andersson.', 'I am a Web and iOS Developer']}/>
        <Menu />

          <div className="site-content">
            <Switch>
              <Route exact path="/" component={MyWork} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={PageNotFound} />
            </Switch>
          </div>

        <Footer />
  
      </div>
    </Router>
);

export default Routes;