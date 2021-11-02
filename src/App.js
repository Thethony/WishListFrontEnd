import {useState, useEffect, UseRef } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Show from './pages/Show';
import { auth } from './services/firebase';



function App() {
  return (
    <h1>WishList</h1>
  );
}

export default App;
