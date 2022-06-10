import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    alignTitle: {
        marginTop: '20px !important',
    },
    divider:{
        '&.MuiDivider-root::before , &.MuiDivider-root::after':{
            margin: '35px',
            borderTop: 'thin solid #8e24aa'
        },
    }
})