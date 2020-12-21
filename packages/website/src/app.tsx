import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        width: "100%",
        height: "100%"
      }}
    >
      <HashRouter basename="/">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home"/>
        </Switch>
      </HashRouter>
    </div>
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