import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
    alignTitle: {
        textAlign: 'center',
        marginTop: '80px !important'
    },
    gridContainer: {
        marginTop: '25px !important',
    },
    card:{ 
        maxWidth:'345px', 
        display:'flex', 
        flexDirection:'column',
        height: '100%', 
        background: '#010312 !important', 
        boxShadow: '#3c0087 7px 3px 20px !important', 
        borderRadius: '0px !important',
    },
    card_title: {
        fontSize: '1.063rem !important', 
        textAlign: 'center',
        fontWeight: 'bold !important',
        [theme.breakpoints.only('xl')]: {
            fontSize: '1.125rem !important'
        }

    },
    card_description: {
        fontSize: '15px !important', 
        [theme.breakpoints.only('xl')]: {
            fontSize: '17px !important'
        }
    },
    prueba:{
        paddingLeft:'80px',
        paddingRight: '80px',
        [theme.breakpoints.down('lg')]:{

        }
    }
}))