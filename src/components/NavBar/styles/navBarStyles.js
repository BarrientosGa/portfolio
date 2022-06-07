import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
    navBar : {
        display: 'flex',
    },
    boxButtonNav : {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        [theme.breakpoints.down('lg')]: {
            alignItems: 'center'
            
        }
    },
    boxMenuIcon : {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))