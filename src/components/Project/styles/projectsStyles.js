import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
    alignTitle: {
        textAlign: 'center',
        marginTop: '80px !important'
    },
    gridContainer: {
        marginTop: '25px !important'
    },
    card:{ 
        height: '75vh', 
        background: '#010312 !important', 
        boxShadow: '#3c0087 7px 3px 20px !important', 
        borderRadius: '0px !important',
        [theme.breakpoints.only('xl')]: {
            width: '140'
        } 
    },
    card_title: {
        fontSize: '15px', 
        textAlign: 'center',
        [theme.breakpoints.only('xl')]: {
            fontSize: '20px !important'
        }

    },
    card_description: {
        fontSize: '15px !important', 
        [theme.breakpoints.only('xl')]: {
            fontSize: '17px !important'
        }
    }
}))