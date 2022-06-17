import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme)=>({
    alignTitle: {
        marginTop: '20px !important',
        [theme.breakpoints.only('xl')]: {
            fontSize:'50px !important'
        }
    },
    divider:{
        '&.MuiDivider-root::before , &.MuiDivider-root::after':{
            margin: '35px',
            borderTop: 'thin solid #8e24aa'
        },
        [theme.breakpoints.down('440')]: {
            '&.MuiDivider-root::before , &.MuiDivider-root::after':{
                margin: '10px',
            },
        }
    }
}))