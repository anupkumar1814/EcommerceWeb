import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Component = styled(Box)`
    margin-top:10px;
    background:#ffffff;
`

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`

const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`

// const RenderTimer = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down('sm')]: {
//         display: 'none'
//     }
// }));

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        // if (completed) {
        //   // Render a completed state
        //   return <Completionist />;
        // } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
        // }
    };
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerURL} alt="timer" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }

                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                infinite={true}
                autoPlaySpeed={4000}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass='carousel-container'
                draggable={false}
                swipeable={false}
                autoPlay={true}
                responsive={responsive}
                keyBoardControl={true}
                centerMode={true}

            >
                {
                    products && products.map(products => (
                        <Link to ={`product/${products.id}`} style={{textDecoration:'none'}} >
                        <Box textAlign="center" style={{ padding: '25px 15px' }}>
                            <Image src={products.url} alt='product' />
                            <Text style={{ fontWeight: 600, color: '#212121' }} >{products.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{products.discount}</Text>
                            <Text style={{ color: '#212121', opacity: '.6' }}>{products.tagline}</Text>
                        </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;