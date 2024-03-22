import { Container, Grid, Typography } from '@mui/material'
import theme from '../../theme'
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import EmailIcon from '@mui/icons-material/Email';
import TextLogo from '../../Common/TextLogo';

const ContactUs = () => {
    const addressList = ['8-2-602/i', ' Road No. 10', 'Banjara Hills', 'Hyderabad', 'Telangana 500034']
    const phoneNumbers = ['+91 9848113271']
    const emailList = ['service@4strokemotoren.in']
    return (
        <Grid>

            <Grid sx={{
                marginLeft: 2,
                paddingLeft: 2,
                textAlign: 'left',
            }}>
                <Typography
                    noWrap
                    sx={{
                        fontSize: 50,
                        fontWeight: 600,
                        color: '#3574A1',
                    }}
                >
                    Locate Us
                </Typography>
            </Grid>

            <Grid container>

                {/* Logo and address block */}
                <Grid
                    md={4}
                    sx={{
                        paddingTop: 5,
                        paddingBottom: 2,
                    }}>
                    <Grid sx={{
                        // marginTop: 10,
                        marginBottom: 6,
                        marginLeft: 2,
                        paddingLeft: 2,
                        textAlign: 'left',
                        borderLeft: 1,
                        borderWidth: 5,
                        borderColor: theme.palette.primary.light,
                        fontWeight: 400,
                    }}>

                        <TextLogo logoFontSize={40} />

                        {/* Address Content block */}
                        <Grid container>
                            <Grid md={1}>
                                <WhereToVoteIcon sx={{ color: theme.palette.primary.main }} />
                            </Grid>
                            <Grid md={11} >
                                {
                                    addressList.map((element) => (
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                textAlign: 'left',
                                                color: theme.palette.primary.light,
                                                fontSize: '15',
                                                marginLeft: 1
                                            }}>
                                            {element}<br />
                                        </Typography>
                                    )
                                    )
                                }
                            </Grid>

                        </Grid>

                        {/* Phone Content block */}
                        <Grid container sx={{ marginTop: 2 }}>
                            <Grid md={1}>
                                <PhoneCallbackIcon sx={{ color: theme.palette.primary.main }} />
                            </Grid>
                            <Grid md={11}>
                                {
                                    phoneNumbers.map((element) => (
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                textAlign: 'left',
                                                color: theme.palette.primary.light,
                                                fontSize: '15',
                                                marginLeft: 1
                                            }}>
                                            {element}<br />
                                        </Typography>
                                    )
                                    )
                                }
                            </Grid>
                        </Grid>

                        {/* Email Content block */}
                        <Grid container sx={{ marginTop: 2 }}>
                            <Grid md={1}>
                                <EmailIcon sx={{ color: theme.palette.primary.main }} />
                            </Grid>
                            <Grid md={11}>
                                {
                                    emailList.map((element) => (
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                textAlign: 'left',
                                                color: theme.palette.primary.light,
                                                fontSize: '15',
                                                marginLeft: 1
                                            }}>
                                            {element}<br />
                                        </Typography>
                                    )
                                    )
                                }
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                {/* Google Map iframe block */}
                <Grid md={8}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.88979387902!2d78.43668747582714!3d17.417075701947827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9736d59b34f9%3A0x585b6781a34f0913!2s4STROKE%20MOTOREN!5e0!3m2!1sen!2sin!4v1698747494548!5m2!1sen!2sin'
                        height='100%'
                        width='100%'
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        title='4StrokeMap'
                    ></iframe>
                </Grid>

            </Grid >
        </Grid>
    )
}

export default ContactUs