import React from 'react'
import { useStyles } from './styles/homeStyles'
import { Typography, Grid, Box, Fab, Toolbar, Container } from '@mui/material'
import ScrollTop from '../ScrollTop/ScrollTop'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Home = (props) => {

  const classes = useStyles()

  return (
    <Container id='inicio'>
        <Grid container className={classes.gridContainer} id="back-to-top-anchor">
          <Grid item xl={6} lg={5} md={6} sm={8} className={classes.boxText} zeroMinWidth>
            <Typography variant="h3" color="primary" sx={{ marginBottom: '20px' }} >
              BIENVENIDO/A👋
            </Typography>
            <Typography component='p' color="secondary" sx={{ width: '80%' }} >
              Gabriel Barrientos | Licenciatura en informática | Desarrollador front-end en tecnologías Javascript/React js .
            </Typography>
          </Grid>
          <Grid item lg={3} zeroMinWidth>
            <img src="./developer.png" alt="imagen developer home" className={classes.img} />
          </Grid>
        </Grid>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
    </Container>
  )
}

export default Home