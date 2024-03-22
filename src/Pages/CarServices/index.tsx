import { Box, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import theme from '../../theme'
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import EmailIcon from '@mui/icons-material/Email';
import TextLogo from '../../Common/TextLogo';
import PaintingImage from '../../Common/assets/services/painting.jpg'
import DentingImage from '../../Common/assets/services/denting.jpg'
import OilAndFilterImage from '../../Common/assets/services/oilAndFilter.jpeg'

const CarServices = () => {
    const addressList = ['8-2-602/i', ' Road No. 10', 'Banjara Hills', 'Hyderabad', 'Telangana 500034']
    const phoneNumbers = ['+91 9848113271']
    const emailList = ['service@4strokemotoren.in']
    const servicesList: any = {
        "Oil and Filter Change": {
            "description": "Essential for lubricating the engine’s moving parts, reducing friction, and preventing damage. Regular oil changes keep the engine running smoothly and efficiently.",
            "image": OilAndFilterImage
        },
        "Air Conditioning Services": {
            "description": "Involves checking and refilling refrigerant levels, inspecting the AC compressor, and ensuring the system cools effectively, providing comfort during hot weather.",
            "image": ""
        },
        "Engine Check-up and Tune-up": {
            "description": "A comprehensive check of the engine’s components to ensure optimal performance and fuel efficiency. It may include replacing spark plugs, air filters, and other parts as needed.",
            "image": ""
        },
        "Brake Services": {
            "description": " Includes checking brake pads, discs, and fluid levels. It’s crucial for safety to ensure that brakes are responsive and in good condition.",
            "image": ""
        },
        "Battery Service & Replacement": {
            "description": "Testing the battery’s charge and health, ensuring reliable starts, and replacing it if necessary to avoid breakdowns.",
            "image": ""
        },
        "Mufflers and Exhaust": {
            "description": "Inspecting the exhaust system for leaks, damage, and efficiency, which affects the vehicle’s performance and environmental emissions.",
            "image": ""
        },
        "Steering and Suspension": {
            "description": "Ensuring the steering system is responsive and the suspension provides a smooth ride by checking components like shock absorbers and struts.",
            "image": ""
        },
        "Car Painting Services": {
            "description": "This involves repainting or touch-up work to restore a car’s paint job to its original condition. It can range from spot painting, where only small areas are painted, to a full repaint if the car has extensive damage or fading. The process usually includes surface preparation, color matching, painting, and finishing for a seamless look.",
            "image": PaintingImage
        },
        "Car Denting Services": {
            "description": "Denting services address various body damages such as dents, dings, and creases. Techniques like Paintless Dent Removal (PDR) can fix minor dents without needing to repaint the affected area. For larger dents, the process may involve filling, sanding, and repainting to restore the vehicle’s smooth surface.",
            "image": DentingImage
        }
    }
    return (
        <Grid>

            <Grid sx={{
                marginLeft: 2,
                paddingLeft: 2,
                marginBottom: 5,
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
                    Services
                </Typography>
            </Grid>

            <Grid>
                {/* Service Content block */}
                {
                    Object.keys(servicesList).map((service, key) => (
                        <Card
                            raised
                            sx={{
                                display: 'flex',
                                marginTop: 4,
                                borderRadius: 4,
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: "35%"
                                }}
                                image={servicesList[service]['image']}
                                alt={service}
                            />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: "65%",
                            }}>
                                <CardContent sx={{
                                    flex: '1 0 auto',
                                    textAlign: "left",
                                    padding: 6
                                }}>
                                    <Typography variant="h4" sx={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}>
                                        {service}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {servicesList[service]['description']}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                </Box>
                            </Box>
                        </Card>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default CarServices