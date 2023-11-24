import React from 'react';
import { Header, HeroSection, Footer } from './components';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
