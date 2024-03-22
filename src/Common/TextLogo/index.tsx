import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';


import theme from '../../theme'


interface TextLogoProps {
    logoFontSize: number;
}


const TextLogo = ({ logoFontSize }: TextLogoProps) => {
    return (
        <div
            onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })}
        >
            <Grid
                sx={{ paddingLeft: 2 }}
            >
                <Typography
                    noWrap
                    sx={{
                        display: 'inline-block',
                        fontWeight: 700,
                        color: '#A91B0D',
                        fontSize: 35
                    }} >
                    4
                </Typography>
                <Typography
                    noWrap
                    sx={{
                        display: 'inline-block',
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: 35
                    }} >
                    Stroke
                </Typography>
                <Typography
                    noWrap
                    sx={{

                        display: 'inline-block',
                        color: '#0088C6',
                        fontWeight: 700,
                        fontSize: 35
                    }}
                >
                    Motoren
                </Typography >
            </Grid >
        </div >
    )
}

export default TextLogo