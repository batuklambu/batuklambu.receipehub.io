import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleReceipe from './pages/SingleReceipe';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/Receipe/:id">
        <SingleReceipe />
      </Route>
      <Route path="*">
        <Error />
      </Route>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
