import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { DataContext } from '../../context/DataProvider';
// import Dialog from '@mui/material/Dialog';
import { authenticateSignup, authenticateLogin } from '../../service/api';
const Component = styled(Box)`
    height:80vh;
    width:100vh;

`
const Image = styled(Box)`
  background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 70%;
  height:100%;
  width:30%;
  padding : 45px 35px;
  & >p, & > h5{
    color:#fff;
  }

`

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding :25px 35px;
flex:1;
& >div , & >button, & > p{
    margin-top:20px
}

`
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
border-radius:2px;

`;
const RequestOTP = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);

`;
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align;center;
color:#2874f0;
font-weight:600;
cursor:pointer;

`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const signupInitialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}
const loginInitialValues = {
    username: '',
    password: ''
}
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px
font-weight:600;
`
const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues)
    const { setAccount } = useContext(DataContext);
    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstName);

        // console.log(response);
    }
    const onValueChange = (e) => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        });

    }
    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstName);
            // setError(false);
        }
        else {
            setError(true);
        }
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">
                            {account.heading}
                        </Typography>
                        <Typography style={{ marginTop: 20 }}> {account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter username" />
                            {
                                error && <Error>Please enter valid username or password</Error>
                            }

                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter password" />
                            <Text>By continuing , you agree to our terms and condition</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount style={{ textAlign: "center" }} onClick={() => toggleSignup()}>New to flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstName" label="Enter First Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastName" label="Enter Last Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter username" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter email" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter password" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }

                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;

