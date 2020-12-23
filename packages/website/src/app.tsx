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
import {
  theme as primitiveTheme
} from '@primer/primitives';

import { ThemeProvider } from 'styled-components';
import { AppHeader } from "./appheader";
import { Home } from "./home";
import { About } from "./about";
import { Locations } from "./locations";
import { Thoughts } from "./thoughts";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={{
      ...primaryTheme,
      ...primaryTheme
    }}>
      <BaseApp />
    </ThemeProvider>
  )
}

const BaseApp: React.FC = () => {
  return (
    <Box minHeight={"100vh"}>
      <HashRouter basename="/">
        <AppHeader />
        <Box>
          <Switch>
            <Route path={Locations.HOME} component={Home} />
            <Route path={Locations.ABOUT} component={About} />
            <Route path={Locations.THOUGHTS} component={Thoughts} />
            <Redirect to={Locations.HOME}/>
          </Switch>
        </Box>
      </HashRouter>
    </Box>
  );
}