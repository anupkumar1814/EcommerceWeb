import { Box, styled } from '@mui/material';

import Slide from './Slide';

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

// const LeftComponent = styled(Box)`
//     width: 83%;
// `;

// const RightComponent = styled(Box)`
//     margin-top: 10;
//     background: #FFFFFF;
//      width: 17%;
//      margin-left: 10;
//      margin-top: 14;
//      padding: 5px;
//      text-align: center;
// `;

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer}
                    // multi={true} 
                />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="ad" style={{ width: 217 ,    marginTop: 11}} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide;