import React from 'react'
import { useStyles } from './styles/technologyStyles'
import { Grid, Typography, Container } from '@mui/material'
import { motion } from "framer-motion"


const logos = [
  {
    id: 1,
    urlImg: './html_5.png'
  },
  {
    id: 2,
    urlImg: './css-3.png'
  },
  {
    id: 3,
    urlImg: './js.png',
  },
  {
    id: 4,
    urlImg: './react.png'
  },
  {
    id: 5,
    urlImg: './redux.png'
  },
  {
    id: 6,
    urlImg: './mui.png'
  },
  {
    id: 7,
    urlImg: './formik.png'
  },

]

const Technology = () => {

  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" color="primary" className={classes.alignTitle}>
        TECNOLOGÍAS
      </Typography>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} lg={3} md={4} sm={2} className={classes.gridContainer} justifyContent='flex-start'>
          {logos.map(({ id, urlImg }) => (
            <Grid item key={id} zeroMinWidth>
              <motion.img whileHover={{scale:1.2 , transition: {duration: 1}, rotate:360}} src={urlImg} className={classes.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Technology