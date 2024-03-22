import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Rating, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import theme from "../../theme"

const Reviews = () => {

    let reviews = [
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
        {
            customerName: "Sham Jayachandra",
            comment: "Professional service and on time delivery with reasonable pricing. The way they explained the issue and gave the resolution with alternatives was something that I didn’t expect. Would definitely recommend this place for anyone",
            rating: 5,
            reviewLink: "https://g.co/kgs/gjwyFp"
        },
    ]

    return (
        <Grid container>


            <Grid sx={{
                padding: 0,
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
                        Customer Reviews
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{
                flexWrap: 'nowrap',
                overflow: 'auto',
            }}>
                {
                    reviews.map(
                        (review, key) => (
                            <Grid item xl={3} >
                                <Card
                                    raised
                                    sx={{
                                        margin: 5,
                                        minWidth: 345
                                    }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" sx={{ color: theme.palette.primary.main, }}>
                                            {review.customerName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {review.comment}
                                        </Typography>
                                        <Grid sx={{
                                            marginTop: 3
                                        }}>
                                            <Rating name="read-only" value={review.rating} readOnly />
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="medium" onClick={() => { window.location.href = review.reviewLink; }}>Open link</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                    )
                }
            </Grid>

        </Grid >
    )
}
/* <Grid>
                                   <ListItem alignItems="flex-start" onClick={() => { window.location.href = review.reviewLink; }}>
                                       <ListItemText
                                           primary={review.customerName}
                                           secondary={
                                               <>

                                               </>
                                           }
                                       />
                                       <ListItemAvatar sx={{
                                           padding: 1,
                                           paddingRight: 2
                                       }}>
                                           <Rating name="read-only" value={review.rating} readOnly />
                                       </ListItemAvatar>
                                   </ListItem>
                                   {key !== reviews.length - 1 ? <Divider variant="middle" light={false} sx={{ bgcolor: "gray" }} /> : null}
                               </Grid> */
export default Reviews;