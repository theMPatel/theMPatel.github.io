import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Box,
  Header,
  Text
} from '@primer/components';

const AppHeader: React.FC = () => {
  return (
    <Header>
      <Header.Link href="/home">
        <Text fontFamily="monospace">
          Home
        </Text>
      </Header.Link>
      <Header.Link href="/about">
        <Text fontFamily="monospace">
          About
        </Text>
      </Header.Link>
    </Header>
  );
}

const Home: React.FC = () => {
  return (
    <Text fontWeight="bold" fontFamily="monospace">
      this is bold some text
    </Text>
  );
}

const About: React.FC = () => {
  return (
    <Text fontFamily="monospace">
      This is some text that is supposed to be about me
    </Text>
  )
}

export const App: React.FC = () => {
  return (
    <Box>
      <AppHeader />
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