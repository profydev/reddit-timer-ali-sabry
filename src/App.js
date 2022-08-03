import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './global/Style';

import {
  Header, Home, Search, Footer,
} from './components';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

export default App;
