import React from 'react'
import { useStyles } from '../styles/projectsStyles'
import { Typography, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material'

const CardProject = ({ img, title, description, linkRepo }) => {

  const classes = useStyles()

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="imagen de proyecto"
      />
      <CardContent>
        <Typography color='primary' className={classes.card_title}>
          {title.toUpperCase()}
        </Typography>
        <Typography component='p' color="secondary" className={classes.card_description}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-evenly' }}>
        <a href={linkRepo} target='_blank' rel="noreferrer">
          <Button size="small" variant='contained' color='button'>Ver código</Button>
        </a>
      </CardActions>
    </Card>
  )
}

export default CardProject