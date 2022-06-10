import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    alignTitle: {
        textAlign: 'center',
        marginTop: '80px !important'
    },
    container: {
        width: '70% !important',
        marginTop: '25px !important',
        display: 'flex',
        justifyContent: 'center'
    },
    form: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& button': {
            width: '20%',
            marginTop: '20px'
        }
    },
    textField: {
        background: '#2F3038',
        margin: '10px !important',
        '& .css-uil4t8-MuiFormLabel-root-MuiInputLabel-root': { //label
            color: 'white',
            paddingLeft: '10px'
        },
        '& .css-feo2bm-MuiInputBase-root-MuiInput-root': { //input
            color: '#fff'
        },
        '& .css-feo2bm-MuiInputBase-root-MuiInput-root:before': { //input before
            borderBottom: '1px solid grey'
        },
        '& .css-feo2bm-MuiInputBase-root-MuiInput-root:after': { //input before
            borderBottom: '1px solid #8e24aa',
        },
        '& .css-66dh3a-MuiInputBase-input-MuiInput-input': {
            color: '#fff',
            paddingLeft: '10px'
        },
        '& .css-9pdnom-MuiInputBase-root-MuiInput-root:before': {
            borderBottom: '1px solid grey'
        },
        '& .css-9pdnom-MuiInputBase-root-MuiInput-root:after': {
            borderBottom: '1px solid #8e24aa',
        }


    }
}) 