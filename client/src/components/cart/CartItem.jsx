import { Box, Typography, styled, Button } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`;
const LeftComponent = styled(Box)`
display:flex;
flex-direction:column;
    margin:20px;
 `
const SmallText = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:6px;
`
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:red
`
const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch=useDispatch();
const removeItemFromCart=(id)=>{
    dispatch(removeFromCart(id));
}
    return (

        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ width: 110, height: 110 }} />
                <GroupedButton />

            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span"> <img src={fassured} alt="flipkart" style={{ width: 70, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component="span" style={{ fontSize: 28 }}> ₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }} ><strike>₹{item.price.mrp}</strike> </Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388e3c' }}> {item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=> removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}
export default CartItem;