import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Box } from "@website/components";

export const App: React.FC = () => {
  return (
    <Box
      fullScreen
    >
      <HashRouter basename="/">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home"/>
        </Switch>
      </HashRouter>
    </Box>
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