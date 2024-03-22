// app/page.tsx

import { Grid, Typography } from "@mui/material";
import theme from "../../theme";
import bmw from '../../Common/assets/brands/bmw.png';
import divinol from '../../Common/assets/brands/divinol.png';
import ferrari from '../../Common/assets/brands/ferrari.png';
import mini from '../../Common/assets/brands/mini.png';
import rr from '../../Common/assets/brands/rr.png';


export default function PartnerBrands() {

    const brand_partners = [bmw, mini, rr, divinol, ferrari]

    return (
        <>
            <Grid>
                {/* Logo and address block */}
                <Grid sx={{
                    paddingTop: 2,
                    paddingBottom: 2,

                }}>
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
                            Partner Brands
                        </Typography>


                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: 0, paddingBottom: 5 }} >

                    {/* Google Map iframe block */}
                    <Grid>
                        <Grid container>
                            {
                                brand_partners.map((brand, ind) => (
                                    <Grid md={3} xl={2} sx={{ margin: "1%" }}>
                                        <img
                                            src={brand}
                                            alt={brand}
                                            height={110}
                                            width="auto"
                                        />
                                    </Grid>
                                )
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid >
            </Grid>
        </>
    )
}