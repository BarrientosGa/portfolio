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
            
        },
    },
    boxMenuIcon : {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        
    },
    list:{
        display:'flex', 
        flexDirection:'column', 
        margin: '20px',
    },
    link:{
        [theme.breakpoints.only('xl')]: {
            '& button':{
                fontSize: '18px'
            }
        }
    },
    logoNavBar: {
        width:'40px',
        height:'40px',
        [theme.breakpoints.only('xl')]: {
            width: '55px',
            height: '55px'
        }
    }
}))