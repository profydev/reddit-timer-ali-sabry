import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, GlobalStyle } from './components';

const App = () => (
  <div>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
