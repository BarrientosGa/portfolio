import React from 'react'
import {Container, Grid, Box, Toolbar } from '@mui/material'
import { useStyles } from './styles/projectsStyles'
import { motion } from "framer-motion"
import CardProject from './Card/CardProject'
import DividerComp from '../Share/Divider/DividerComp'

const projects = [
  {
    id: 1,
    img: './ongSomosMas.png',
    title: 'ONG Somos Mas',
    description: `Este proyecto tiene dos campañas bien marcadas como lo son la campaña escuela y la campaña juguetes. 
                  Donde en toda la aplicación se trata de mostrar en las diferentes secciones los 
                  diferentes trabajos que se realizan en dichas campañas.`,
    linkRepo: 'https://github.com/PlazaFer/somosmas.git'
  },
  {
    id: 2,
    img: './menuDePlatos.png',
    title: 'Challenge Alkemy | Menu de platos',
    description: `El desafió consta en realizar un menu de comida. Donde solo debía haber 4 platos, 2 veganos y 2 no veganos. 
                  Ademas al ir agregando cada plato, se muestra en pantalla los datos del menu, asi como: Precio total, Promedio 
                  total de preparación y El puntaje de salud.`,
    linkRepo: 'https://github.com/BarrientosGa/challenger-alkemy.git'
  },
  {
    id: 3,
    img: './inceptia.png',
    title: 'Challenge InceptIA',
    description: `El proyecto tiene un login para los usuarios, donde al iniciar sesión el usuario va tener diferentes bots/clientes asociados. 
                  A partir de eso puede buscar en un rango de fechas los casos administrados por ese bots.`,
    linkRepo: 'https://github.com/BarrientosGa/devChallengeReact.git'
  },
  {
    id: 4,
    img: './calculadora.png',
    title: 'Calculadora',
    description: `Una app donde se puede hacer diferentes cálculos como, suma, resta, división, 
                  sacar porcentaje etc.`,
    linkRepo: 'https://github.com/BarrientosGa/Calculator-online.git'
  },
  {
    id: 5,
    img: './libros.png',
    title: 'Buscador de libros',
    description: `Una app donde podrás buscas libros de diferentes géneros, por autor , tema. 
                  Ademas si te interesa algún libro podes leerlo directamente desde Google Books.`,
    linkRepo: 'https://github.com/BarrientosGa/Book-finder.git'
  },
  {
    id: 6,
    img: './ecommerce.png',
    title: 'E-commerce - Tienda de celulares',
    description: `celulandia es una tienda online donde vas a poder simular la compra de productos, 
                  eligiendo la cantidad, completando un formulario con tus datos y obteniendo el id de tu compra.`,
    linkRepo: 'https://github.com/BarrientosGa/React-js.git'
  },
]


const Project = () => {

  const classes = useStyles()

  return (
    <Box id='proyectos'>
      <Toolbar/>
      <DividerComp title='PROJECTOS' />
      <Container>
        <Grid container className={classes.gridContainer} spacing={3} justifyContent='center' rowGap={2}>
          {projects.map(({ id, ...props }) => (
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