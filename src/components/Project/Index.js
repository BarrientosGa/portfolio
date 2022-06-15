import React from 'react'
import { Container, Grid, Box, Toolbar } from '@mui/material'
import { useStyles } from './styles/projectsStyles'
import { motion } from "framer-motion"
import CardProject from './Card/CardProject'
import DividerComp from '../Share/Divider/DividerComp'
import project from '../../json/project.json'

const Project = () => {

  const classes = useStyles()

  return (
    <>
      <Box id='proyectos'>
        <Toolbar />
        <DividerComp title='PROJECTOS' />
        {/* <Container sx={{ border: '1px solid red'}}> */}
      </Box>

      <Grid container rowSpacing={5} sx={{marginTop:'10px'}}>
        {project.map(({ id, ...props }) => (
          <Grid item key={id} xs={12} sm={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}> {/* el sm va heredar del xs */}
            {/* <motion.div whileHover={{ scale: 1.1 }}> */}
            <CardProject {...props} />
            {/* </motion.div> */}
          </Grid>
        ))}
      </Grid>

    </>
  )
}

export default Project