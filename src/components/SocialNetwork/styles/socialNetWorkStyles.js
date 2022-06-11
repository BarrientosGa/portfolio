import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    box_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        zIndex: 100,
        position: 'fixed',
        right: 0,
        bottom: 0,
        padding: '16px',
        margin: '15px',
    },
    box_mobile :{
        display: 'flex',
        marginTop:'40px',
        '& a':{
            padding: '5px'
        }
    },
})