import Carousel from "react-material-ui-carousel"
import image1 from "../assets/slidePhotos/1.jpeg"
import image2 from "../assets/slidePhotos/2.jpeg"
import image3 from "../assets/slidePhotos/3.jpeg"
import image4 from "../assets/slidePhotos/4.jpeg"
import image5 from "../assets/slidePhotos/5.jpeg"
import image6 from "../assets/slidePhotos/6.jpeg"
import image7 from "../assets/slidePhotos/7.jpeg"
import { useEffect, useState } from "react"

const PhotoCarosol = () => {

    const [picWidth, setPicWidth] = useState(window.innerWidth);
    const [picHeight, setPicHeight] = useState("");

    // useEffect(() => { setPicWidth(window.innerWidth) }, [])

    const imagesList = [image1, image2, image4, image5, image6, image7]
    return (
        <div>
            <Carousel
                animation="fade"
                duration={1000}
                cycleNavigation={true}
                swipe={true}
                indicators={true}
                fullHeightHover={true}
                onChange={(row) => {
                    setPicWidth(window.innerWidth)
                    setPicHeight("100%")
                }}
                indicatorContainerProps={{
                    style: {
                        bottom: "10px"
                    }
                }}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'cornflowerblue',
                        marginLeft: window.innerWidth * 0.03,
                        marginRight: window.innerWidth * 0.03
                    }
                }}
            >
                {
                    imagesList.map((element, ind) => {
                        return (
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={element}
                                    alt={element}
                                    width={picWidth}
                                    height={picHeight === "" ? picWidth / 3.3 : picHeight}
                                />
                            </div>
                        )
                    })
                }

            </Carousel >
        </div>
    )
}

export default PhotoCarosol