import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Box,
  theme as primaryTheme
} from '@primer/components';

import { ThemeProvider } from 'styled-components';
import { AppHeader } from "./appheader";
import { Home } from "./home";
import { About } from "./about";
import { Locations } from "./locations";
import { Thoughts } from "./thoughts";
import { AppFooter } from "./appfooter";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <BaseApp />
    </ThemeProvider>
  )
}

const BaseApp: React.FC = () => {
  return (
    <Box>
      <HashRouter basename="/">
        <AppHeader />
        <Box minHeight={"100vh"} bg="black">
          <Switch>
            <Route path={Locations.HOME} component={Home} />
            <Route path={Locations.ABOUT} component={About} />
            <Route path={Locations.THOUGHTS} component={Thoughts} />
            <Redirect to={Locations.HOME}/>
          </Switch>
          <AppFooter />
        </Box>
      </HashRouter>
    </Box>
  );
}