import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Navbar = lazy(() => import('./components/Navbar'));
const JoinCea = lazy(() => import('./components/JoinCea') )

function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/About' component={About}/>
            <Route path='/join' component={JoinCea}/>
            {/* <Route path="/Robots" component={Robots} /> */}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
