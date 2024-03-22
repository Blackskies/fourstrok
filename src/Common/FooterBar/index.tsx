import { AppBar, Container, Typography } from "@mui/material"
import constants from "../constants"

const FooterBar = () => {
    return (
        <AppBar sx={{
            borderTop: 4,
            borderColor: '#0088C6',
            backgroundColor: 'white'
        }}
            position="static">
            <Container maxWidth="lg">
                <Typography sx={{
                    my: 1, display: 'block', ml: 5, fontWeight: 500, fontSize: 18
                }}
                    align="right"
                >
                    <ins>@</ins>2024 All rights reserved to {constants.companyName}, Hyderabad.
                </Typography>
            </Container>
        </AppBar>
    )
}

export default FooterBar