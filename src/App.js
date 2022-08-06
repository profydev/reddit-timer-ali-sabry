import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './style';

import { Home, Search, Footer } from './components';

import Header from './common/header';

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search/:value" children={<Search />} />
    </Switch>
    <section id="how-it-works">
      How it works
    </section>
    <section id="about">
      About
    </section>
    <Footer />
  </ThemeProvider>
);

export default App;
