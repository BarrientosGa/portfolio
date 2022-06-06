import React from 'react'
import './contactStyles.css'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <>
      {/* formik */}
      <Typography variant="h3" color="primary">
        Contacto
      </Typography>
      <p>icons de redes sociales</p>
      {/* al tocar uno se abre abajo con la info */}
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Button variant='contained' color='button'>Enviar</Button>
      </form>
      <footer>aca ira contenido de footer</footer>
    </>
  )
}

export default Contact