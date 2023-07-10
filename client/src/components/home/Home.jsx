import NavBar from "./NavBar";
import Banner from "./Banner";
import { styled ,Box} from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productsActions";
import {useDispatch,useSelector} from 'react-redux';
import Slide from "./Slide"
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component=styled(Box)`
padding:10px 5px;
background:#f2f2f2;
`
const Home = () => {
    
    const {products}=useSelector(state=>state.getProducts);
    // const {products}=getProducts;
    // console.log(products);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <>
            <NavBar />
            <Component>
            <Banner />
            <MidSlide products={products} title="Deal of the day" timer={true} />
            <MidSection />
            <Slide products={products} title="Discount for you "  timer={false} />
            <Slide products={products} title="Suggesting Items"  timer={false} />
            <Slide products={products} title="Top selection"  timer={false} />
            <Slide products={products}  title="Recommended items" timer={false} />
            <Slide products={products}  title="Season top picks"  timer={false}/>
            <Slide products={products}  title="Trending Ofers" timer={false} />
            <Slide products={products}  title="Top deals on Accessories" timer={false} />
            </Component>
         
        </>

    )
};
export default Home;