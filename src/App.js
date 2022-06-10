import React from 'react'
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import SocialNetworkFloat from './components/SocialNetwork/SocialNetworkFloat';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box >
        <NavBar />
        <SocialNetworkFloat/>
        <Home />
        <Technology />
        <Project />
        <Contact />
      </Box>
    </ThemeProvider>
  )
}

export default App

