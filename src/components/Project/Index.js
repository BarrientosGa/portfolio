import React from 'react'
import {Container, Grid, Box, Toolbar } from '@mui/material'
import { useStyles } from './styles/projectsStyles'
import { motion } from "framer-motion"
import CardProject from './Card/CardProject'
import DividerComp from '../Share/Divider/DividerComp'
import project from '../../json/project.json'

const Project = () => {

  const classes = useStyles()
  
  return (
    <Box id='proyectos'>
      <Toolbar/>
      <DividerComp title='PROJECTOS' />
      <Container>
        <Grid container className={classes.gridContainer} spacing={3} justifyContent='center' rowGap={2}>
          {project.map(({ id, ...props }) => (
            <Grid item key={id}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <CardProject {...props} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Project