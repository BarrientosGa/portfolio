import React from 'react'
import {Grid, Box, Toolbar } from '@mui/material'
import CardProject from './Card/CardProject'
import DividerComp from '../Share/Divider/DividerComp'
import project from '../../json/project.json'

const Project = () => {

  return (
    <>
      <Box id='proyectos'>
        <Toolbar />
        <DividerComp title='PROJECTOS' />
      </Box>
      <Grid container rowSpacing={5} sx={{ marginTop: '10px' }}>
        {project.map(({ id, ...props }) => (
          <Grid item key={id} xs={12} sm={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}> {/* el sm va heredar del xs */}
            <CardProject {...props} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Project