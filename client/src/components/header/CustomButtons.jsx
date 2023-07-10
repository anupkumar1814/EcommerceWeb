import { Box,Button, Typography ,styled} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
const Wrapper=styled(Box)(({theme})=>({
  display:'flex',
margin:' 0 3% 0 auto',
 '& > *':{
    marginRight:40,
    fontSize:15,
    alignItems:'center'
 },
 [theme.breakpoints.down('md')]:{
  display:'block'
}

}));



const Container =styled(Link)(({theme})=>({
  display:"flex",
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))


const LoginButton=styled(Button)`
    color:#2874f0;
    background:#fff;
    margin-left:10px;
    margin-right: 25px;
    text-transform:none;
    padding: 5px 40px;

`
const CustomButtons = () => {

  const [open,setOpen]=useState(false);
  const {account,setAccount}=useContext(DataContext);
  const {cartItems}=useSelector(state=>state.cart);
  const openDialog=()=>{
    setOpen(true);
;  }
      return (
        <Wrapper >
          {
            account ? <Profile account={account} setAccount={setAccount} />:
            <LoginButton variant ="contained" onClick={()=>openDialog()}>Login</LoginButton>
          }
          

          <Typography style={{marginTop:3,width:135,marginRight:20}}> Become a Seller</Typography>
          <Typography style={{marginTop:3,marginRight:16}}>More</Typography>
          <Container to ="/cart">
          <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart/>
          </Badge>
            <Typography style={{marginLeft:8}}>Cart</Typography>
          </Container>
          <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButtons;