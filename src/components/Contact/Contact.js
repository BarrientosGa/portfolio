import React from 'react'
import './contactStyles.css'
import Typography from '@mui/material/Typography'

const Contact = () => {
  return (
    <>
      {/* formik */}
      <Typography variant="h3">
        Contacto
      </Typography>
      <p>icons de redes sociales</p>
      {/* al tocar uno se abre abajo con la info */}
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <footer>aca ira contenido de footer</footer>
    </>
  )
}

export default Contact