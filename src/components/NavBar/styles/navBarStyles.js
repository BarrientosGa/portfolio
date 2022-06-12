import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
    navBar : {
        display: 'flex',
    },
    boxButtonNav : {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            alignItems: 'center'
            
        }
    },
    boxMenuIcon : {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    list:{
        display:'flex', 
        flexDirection:'column', 
        margin: '20px',
    },
    link:{
        textDecoration: 'none !important'
    },
    'MuiPaper-root-MuiDrawer-paper':{
        backgroundColor:'none'
    }
}))