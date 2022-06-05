import React from 'react'
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Technology />
      <Project />
      <Contact />
    </>
  )
}

export default App

