import React, { useState } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import About from 'pages/About';
import Store from 'pages/Store';

const App = () => {
  const [topPadding, setTopPadding] = useState(132);
  const location = useLocation();

  return (
    <React.Fragment>
      <Navbar setTopPadding={setTopPadding} activeMenuItem={location.pathname} />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={() => <Home topPadding={topPadding} path="/" />} />
          <Route exact path="/about" render={() => <About topPadding={topPadding} path="/about" />} />
          <Route exact path="/store" render={() => <Store topPadding={topPadding} path="/store" />} />
        </Switch>
      </AnimatePresence>
      {/* <div className="container is-fluid" style={{paddingTop: `${topPadding}px`}}>
        hi
      </div> */}
    </React.Fragment>
  );
};

export default App;