import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: '0px !important',
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