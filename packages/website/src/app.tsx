import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Box } from '@primer/components';

import { ThemeProvider } from 'styled-components';
import { AppHeader } from "./appheader";
import { Home } from "./home";
import { About } from "./about";
import { Locations } from "./locations";
import { Thoughts } from "./thoughts";
import { AppFooter } from "./appfooter";
import { theme } from "./theme";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseApp />
    </ThemeProvider>
  )
}

const BaseApp: React.FC = () => {
  return (
    <Box minHeight={"100vh"} bg="black">
      <HashRouter basename="/">
        <AppHeader />
        <Box>
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