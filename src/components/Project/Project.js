import React from 'react'
import './projectStyles.css'
import {Typography, Card, CardContent,CardActions, Button} from '@mui/material'

const Project = () => {
  return (
    <>
        <Typography variant="h4" color="initial">
          PROJECTOS
        </Typography>

        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* foto del proyecto */}
        <Typography variant='h6'>
          Titulo proyecto
        </Typography>
        <Typography component="p">
         descripcion del proyecto
        </Typography>
        <Typography component="p">
          tecnologias que se utilizaron
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Ver código</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Project