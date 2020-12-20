import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        <Redirect to="/home"/>
      </HashRouter>
    </>
  );
}

const Home: React.FC = () => {
  return (
    <span>
      This is my homepage
    </span>
  );
}

const About: React.FC = () => {
  return (
    <span>
      I am an engineer. Much wowe.
    </span>
  )
}