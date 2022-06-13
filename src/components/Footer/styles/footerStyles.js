import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    footer: {
        color: 'white',
        margin: '30px'
    },
    textFooter: {
        marginTop: '30px',
        [theme.breakpoints.only('xl')]: {
            fontSize: '20px !important'
        }
    }
})) 