import React from 'react'
import Home from './components/Home/Index';
import Technology from './components/Technology/Index';
import Project from './components/Project/Index';
import Footer from './components/Footer/Index';
import NavBar from './components/NavBar/Index';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <Box >
        <NavBar />
        <Home />
        <Technology />
        <Project />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App

