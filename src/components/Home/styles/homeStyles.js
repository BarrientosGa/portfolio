import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '250px',
        height: '250px',
        marginTop: '40px',
    },
    boxText: {
        //border: '1px solid red',
        marginTop: '60px !important',
        '& p': {
            [theme.breakpoints.down('md')]: {
                width: '100%',
                textAlign:'center'
            },
            [theme.breakpoints.only('xl')]: {
                fontSize: '20px'
            }
        },
        '& h3': {
            [theme.breakpoints.down('md')]: {
                fontSize: '45px',
                textAlign: 'center'
            },
            [theme.breakpoints.only('xl')]: {
                fontSize: '60px'
            }
        },
    }
}))