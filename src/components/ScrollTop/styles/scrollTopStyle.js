import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    iconScroll: {
        position: 'fixed',
        bottom: 16,
        right: 85,
        opacity: '0.2',
        '& .css-12m9wit-MuiButtonBase-root-MuiFab-root': {
            opacity: '0.2'
        },
        [theme.breakpoints.down('lg')]: {
            bottom: 85,
            right: 25,
        },
        [theme.breakpoints.only('xl')]: {
            '& button' : {
                width: '3.125rem',
                height: '3.125rem'
            },
            '& button svg': {
                fontSize: '2.813rem'
            }
        }
    }
}))