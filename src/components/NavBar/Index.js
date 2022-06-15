import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import NavBarDesktop from './NavBarDesktop/NavBarDesktop'
import NavBarMobile from './NavBarMobile/NavBarMobile'


const NavBar = () => {
  const [open, setOpen] = useState(false)
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg')); // componente Hidden esta deprecado, por eso se hace asi

  return (
    <>
      {hidden ? <NavBarMobile setOpen={setOpen} open={open}/> : <NavBarDesktop /> }
    </>

  )
}

export default NavBar