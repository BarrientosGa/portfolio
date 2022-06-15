import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        '&.MuiCard-root': {
            maxWidth: '345px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: '#010312',
            boxShadow: '#3c0087 7px 3px 20px',
            borderRadius: '0px',
        }
    },
    card_title: {
        '&.MuiTypography-root': {
            fontSize: '1.063rem',
            textAlign: 'center',
            fontWeight: 'bold',
            [theme.breakpoints.only('xl')]: {
                fontSize: '1.125rem'
            }
        }
    },
    card_description: {
        '&.MuiTypography-root': {
            fontSize: '15px',
            textAlign: 'start',
            [theme.breakpoints.only('xl')]: {
                fontSize: '17px'
            }
        }
    },
}))