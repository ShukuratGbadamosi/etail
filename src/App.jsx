import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout';

function app () {
  return (
        <>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
      </Routes>
  </>
  );
};

export default app;