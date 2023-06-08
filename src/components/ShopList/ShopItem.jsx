import { useDispatch } from "react-redux"
import { setActiveShopThunk } from "../../redux/shops/shops.thunk"
import { ShopButton, ShopButtonContainer, ImageThumb, Logo, ShopName } from "./ShopItem.styled";
import { useParams } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'

export const ShopItem = ({ itemID, name, logo, enabled }) => {

    const isDesktop = useMediaQuery({ minWidth: 890 })
    const isTablet = useMediaQuery({ minWidth: 479, maxWidth: 889 })
    const isMobile = useMediaQuery({ maxWidth: 480 })

    const dispatch = useDispatch();

    const { id } = useParams()

    return (<>
        {isDesktop &&
            <ShopButton style={enabled ? {} : { pointerEvents: "none", color: "silver" }} to={`/${itemID}`} onClick={() => dispatch(setActiveShopThunk(itemID))} >
                <ShopButtonContainer style={itemID === id ? {backgroundColor: "#87cfeb3b"} : {}}>
                    <ImageThumb >
                        <Logo src={logo} alt="shop logo"></Logo>
                    </ImageThumb>
                    <ShopName>{name}</ShopName>
                </ShopButtonContainer>
            </ShopButton >
        }

        {(isTablet || isMobile) &&
            <ShopButton style={enabled ? {} : { pointerEvents: "none", color: "silver" }} to={`/${itemID}`} onClick={() => dispatch(setActiveShopThunk(itemID))} >
                <ShopButtonContainer style={itemID === id ? {backgroundColor: "#87cfeb3b"} : {}}>
                    <ImageThumb >
                        <Logo src={logo} alt="shop logo"></Logo>
                    </ImageThumb>
                </ShopButtonContainer>
            </ShopButton >
        }
        
</>)
}