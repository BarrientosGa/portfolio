import React from 'react'
import { useStyles } from './styles/contactStyles'
import { Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material'
import DividerComp from '../../Share/Divider/DividerComp'

const Contact = () => {

  const classes = useStyles()

  return (
    <Box id='contacto'>
      <Toolbar/>
      <DividerComp title='CONTACTO' />
      <Container className={classes.container}>
        <Box component='form' action="mailto:gabrielbarrientos729@gmail.com" method="post" encType='text/plain' className={classes.form}>
          <TextField
            id="standard-basic"
            label="Nombre"
            variant="standard"
            fullWidth
            className={classes.textField} />
          <TextField
            id="standard-basic"
            label="Apellido"
            variant="standard"
            fullWidth
            className={classes.textField}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            className={classes.textField}
          />
          <TextField
            id="standard-basic"
            fullWidth
            multiline
            rows={4}
            variant='standard'
            defaultValue="Escribe tu mensaje"
            className={classes.textField}
          />
          <Button type='submit' variant='contained' color='button'>Enviar</Button>
        </Box>
      </Container>
      <Box component='footer' sx={{ color: 'white', margin: '30px' }}>
        <Typography component='p'>
          &copy; Copyright 2022 | Gabriel Barrientos
        </Typography>
      </Box>
    </Box>
  )
}

export default Contact