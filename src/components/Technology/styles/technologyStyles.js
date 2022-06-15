import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        '&.MuiContainer-root': {
            width: '60%',
            marginTop: '40px'
        }
    },
    paper: {
        '&.MuiPaper-root': {
            background: '#263238',
            width: '70%',
            padding: '8px',
            border: '1px solid transparent'
        },
        '&.MuiPaper-root:hover': {
            border: '1px solid #3c0087',
            background: '#010312'
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center'
    },
    typography: {
        '&.MuiTypography-root': {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginLeft: '10px'
        }
    }
}))