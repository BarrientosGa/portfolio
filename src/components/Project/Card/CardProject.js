import React from 'react'
import { useStyles } from '../styles/projectsStyles'
import { Typography, Card, CardContent, CardActions, Button, CardMedia, Link, Box } from '@mui/material'

const CardProject = ({ img, title, description, linkRepo, linkWeb }) => {

  const classes = useStyles()

  return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="imagen de proyecto"
        />
        <CardContent>
          <Typography color='primary' component='h3' variant='h6' className={classes.card_title}>
            {title.toUpperCase()}
          </Typography>
        </CardContent>
        <CardContent sx={{ height: '35%' }}>
          <Typography component='p' variant='body2' align='start' color="secondary" className={classes.card_description}>
            {description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-evenly' }}>
          <Link href={linkRepo} target='_blank' rel="noreferrer" underline='none'>
            <Button variant='contained' color='button'>Ver código</Button>
          </Link>
          <Link href={linkWeb} target='_blank' rel="noreferrer" underline='none'>
            <Button variant='contained' color='button'>Ver sitio</Button>
          </Link>
        </CardActions>
      </Card>
  )
}

export default CardProject