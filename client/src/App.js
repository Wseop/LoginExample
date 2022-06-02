import './App.css';
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import Signin from './pages/Signin.js';
import Signup from './pages/Signup.js';
import Contents from './pages/Contents.js';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
