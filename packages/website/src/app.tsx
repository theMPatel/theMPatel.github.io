import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/home"/>
      </Switch>
    </HashRouter>
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