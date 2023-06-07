import { useDispatch } from "react-redux"
import { setActiveShopThunk } from "../../redux/shops/shops.thunk"
import { ShopButton, ShopButtonContainer, ImageThumb, Logo, ShopName } from "./ShopItem.styled";
import { useParams } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'

export const ShopItem = ({ itemID, name, logo, enabled }) => {

        const isDesktop = useMediaQuery({ query: '(min-width: 890px)' })
        const isTablet = useMediaQuery({ query: '(max-width: 889px)' })
        const isMobile = useMediaQuery({ query: '(max-width: 479px)' })



    const dispatch = useDispatch();

    const { id } = useParams()

    return (<>
        {isDesktop && (<ShopButton style={enabled ? {} : { pointerEvents: "none", color: "silver" }} to={`/${itemID}`} onClick={() => dispatch(setActiveShopThunk(itemID))} >
            <ShopButtonContainer style={itemID === id ? {backgroundColor: "#87cfeb3b"} : {}}>
                <ImageThumb >
                <Logo src={logo} alt="shop logo"></Logo>
            </ImageThumb>
                <ShopName>{name}</ShopName>
            </ShopButtonContainer>
        </ShopButton >)}
        {/* <ShopButton style={enabled ? {} : { pointerEvents: "none", color: "silver" }} to={`/${itemID}`} onClick={() => dispatch(setActiveShopThunk(itemID))} >
            <ShopButtonContainer style={itemID === id ? {backgroundColor: "#87cfeb3b"} : {}}>
                <ImageThumb >
                <Logo src={logo} alt="shop logo"></Logo>
            </ImageThumb>
                <ShopName>{name}</ShopName>
            </ShopButtonContainer>
        </ShopButton > */}
        {isTablet && (<ShopButton style={enabled ? {} : { pointerEvents: "none", color: "silver" }} to={`/${itemID}`} onClick={() => dispatch(setActiveShopThunk(itemID))} >
            <ShopButtonContainer style={itemID === id ? {backgroundColor: "#87cfeb3b"} : {}}>
                <ImageThumb >
                <Logo src={logo} alt="shop logo"></Logo>
            </ImageThumb>
                
            </ShopButtonContainer>
        </ShopButton >)}
        
</>)
}