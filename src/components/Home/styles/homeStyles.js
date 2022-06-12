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
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
    },
}))