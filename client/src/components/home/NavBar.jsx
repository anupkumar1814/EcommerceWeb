import { Box,Typography,styled } from "@mui/material";
import { navData } from '../../constants/data'


const Component=styled(Box)(({theme})=>({
 display:"flex",
 margin:"55px 120px 0 120px",
 justifyContent:"space-between",
 overflow:"overlay",
[theme.breakpoints.down('lg')]:{
    margin:0
}
}));

const Container=styled(Box)`
padding:12px 8px;
text-align:center;
${'' /* align-items:center; */}
`;

const Text=styled(Typography)`
font-size:14px;
font-weight:400;
font-family:inherit;
`;

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data=>(
                    <Container >
                        <img src={data.url} alt='nav' style={{width:70}} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
};
export default NavBar;
