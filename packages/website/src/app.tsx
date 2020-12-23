import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Box
} from '@primer/components';
import { AppHeader } from "./appheader";
import { Home } from "./home";
import { About } from "./about";
import { Locations } from "./locations";
import { Thoughts } from "./thoughts";

export const App: React.FC = () => {
  return (
    <Box minHeight={"100vh"}>
      <AppHeader />
      <HashRouter basename="/">
        <Switch>
          <Route path={Locations.HOME} component={Home} />
          <Route path={Locations.ABOUT} component={About} />
          <Route path={Locations.THOUGHTS} component={Thoughts} />
          <Redirect to={Locations.HOME}/>
        </Switch>
      </HashRouter>
    </Box>
  );
}