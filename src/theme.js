import { createTheme } from '@mui/material/styles'

const RobotoMono = "'Roboto Mono', monospace";

export const theme = createTheme({
    palette: {
        primary: {
            main:'#ffffff',
        },
        secondary: {
            main: '#90a4ae'
        },

        button: {
            main: '#3c0087',
            contrastText: '#ffffff',
        },
        navBar: {
            main: '#263238',
            contrastText: '#ffffff'
        },
    },
    typography: {
        h1: {
            fontFamily: RobotoMono,
        },
        h2: {
            fontFamily: RobotoMono,
        },
        h3: {
            fontFamily: RobotoMono,
        },
        h4: {
            fontFamily: RobotoMono,
        },
        h5: {
            fontFamily: RobotoMono,
        },
        h6: {
            fontFamily: RobotoMono,
        },
    },
})