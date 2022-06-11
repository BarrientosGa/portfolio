import React from 'react'
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import SocialNetworkFloat from './components/SocialNetwork/SocialNetworkFloat';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box >
        <NavBar />
        {/* <SocialNetworkFloat/> */}
        <Home />
        <Technology />
        <Project />
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}

export default App

