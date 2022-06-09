import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
        borderRadius: '0px !important' 
    },
    card_title: {
        fontSize: '15px', 
        textAlign: 'center'
    },
    card_description: {
        fontSize: '15px !important', 
        marginTop: '20px !important'
    }
})