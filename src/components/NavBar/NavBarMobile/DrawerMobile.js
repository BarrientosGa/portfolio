import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
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
          <List>
            {/* modificar esto despues y agregarle los id a los botones */}
            {['Home', 'Tecnologías', 'Proyectos', 'Contacto'].map((text, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
  )
}

export default DrawerMobile