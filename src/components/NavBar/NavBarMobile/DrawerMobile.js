import { Box, Button, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useStyles } from '../styles/navBarStyles';

const DrawerMobile = ({setOpen, open}) => {

  const classes = useStyles()

  return (
    <Drawer
        anchor='bottom'
        open={open}
        onClose={() => setOpen(!open)}
      >
        <Box
          role="presentation"
          onClick={() => setOpen(!open)}
          className={classes.boxButtonNav}
          sx={{backgroundColor: 'navBar.main', color: 'primary.main'}}
        >
          <List className={classes.list}>
            {/* modificar esto despues y agregarle los id a los botones */}
            {['Tecnologías', 'Proyectos', 'Contacto'].map((text, index) => (
              <Link href={`#${text.toLowerCase()}`} key={index} className={classes.link}>
                <Button>{text}</Button>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
  )
}

export default DrawerMobile