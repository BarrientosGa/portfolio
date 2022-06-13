import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    container: {
        '&.css-1oqqzyl-MuiContainer-root': {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '20%'
            }
        }
    },
    gridContainer: {
        '&.css-1pdrd2z-MuiGrid-root': {
            marginLeft: '0px',
            marginTop: '0px'
        }
    },
    img: {
        width: '70px',
        height: '70px',
        [theme.breakpoints.only('xl')]: {
            width: '90px',
            height: '90px',
        }
    },
}))