import { createTheme } from '@mui/material/styles'
import "typeface-open-sans";
const font = "Kanit,Helvetica,  Gabarito";
const theme = createTheme({
    typography: {
        fontFamily: font,
        allVariants: {
            color: "#1E425B"
        },
        h4: {
            fontSize: 33
        },
        caption: {
            fontSize: 20
        }
    },
    palette: {
        primary: {
            main: "#214278",
            light: "#0088C6"
        }, secondary: {
            main: "#D53831"
        }

    }
});

export default theme;