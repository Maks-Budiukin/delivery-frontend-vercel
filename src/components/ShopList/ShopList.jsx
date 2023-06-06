import { useDispatch, useSelector } from "react-redux"
import { ShopItem } from "./ShopItem"
import { useEffect } from "react";
import { getShopsThunk } from "../../redux/shops/shops.thunk"

import { StyledList} from "./ShopList.styled"
import { useNavigate } from "react-router-dom";

export const ShopList = () => {
    const shops = useSelector(state => state.shops.shops)
    const enabledShop = useSelector(state => state.products.enabledShop)
    const activeShop = useSelector(state => state.shops.activeShop)
    const navigate = useNavigate()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopsThunk())
        activeShop && navigate(`/${activeShop}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <StyledList>
            {shops.map(item => {
                return (<ShopItem key={item._id} itemID={item._id} name={item.name} logo={item.logo} enabled={enabledShop && enabledShop !== item._id ? false : true } />)
            })}
        </StyledList>
    )
}