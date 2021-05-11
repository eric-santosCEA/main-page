import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNav from './components/MainNav'

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Navbar = lazy(() => import('./components/Navbar'))
const JoinCea = lazy(() => import('./components/JoinCea'))
const Login = lazy(() => import('./components/Login'))
const Work = lazy(() => import('./components/Work'))
const Hiring = lazy(() => import('./components/Hiring'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/join" component={JoinCea} />
            <Route path="/login" component={Login} />
            <Route path="/work" component={Work} />
            <Route path="/hiring" component={Hiring} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/Robots" component={Robots} /> */}
          </Switch>
          <MainNav />
        </Suspense>
      </Router>
    </>
  )
}

export default App
