import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme/Theme';
import GlobalStyle from './global/Style';

import {
  Header, Home, Search, Footer,
} from './components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    <Footer />
  </ThemeProvider>
);

export default App;
