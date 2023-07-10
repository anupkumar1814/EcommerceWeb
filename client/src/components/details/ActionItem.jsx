

import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/patym';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/patym';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

// const LeftContainer = styled(Box)`
//     minWidth: 40%;
//     padding: 40px 0 0 80px;
// `


const Image = styled('img')({
    padding:'15px',
    width: '95%'
});


const StyledButton = styled(Button)`
    width: 48.1%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
        };
        const buyNow=()=>{
            let response=payUsingPaytm({amount:500,email:'independentanup@gmail.com'});
            let information={
                action: 'https://securegw-stage.paytm.in/order/process',
                params: response
            }
            post(information);
        }
    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0',
                // marginRight:'12px'
               
            }}>
                <Image src={product.detailUrl} alt="detail" /><br />
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={()=>buyNow()} style={{ background: '#fb541b' }}><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}


export default ActionItem;

// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// P
