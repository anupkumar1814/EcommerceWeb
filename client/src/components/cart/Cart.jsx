
import { Typography ,Grid,Box,styled,Button} from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/patym';

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));
const Header=styled(Box)`
padding:15px 24px;
background:#fff;
`

const ButtonWrapper=styled(Box)`
padding:16px 22px ;
background:#fff;
box-shadow:0 -2px 10px 0 rgba(0 0 0 /10%);
border-top : 1px solid #f0f0f0;

`
const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
background:lightgreen;
color:#000000;
width:250;
height:251;
border-radius:2px;
font-weight:400;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const Cart = () => {
    const { cartItems } = useSelector(state=>state.cart)
    const buyNow1=()=>{
        let response=payUsingPaytm({amount:500,email:'independentanup@gmail.com'});
        let information={
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12} >
                            <Header>
                                <Typography>My cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item=>(
                                    <CartItem item={item}/>
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton  onClick={()=>buyNow1()}>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item  lg={3} md={3} sm={12} xs={12} >
                            <TotalView cartItems={cartItems}/>
                        </Grid>
                    </Container>
                    : <EmptyCart />
            }
        </>
    )
}
export default Cart;