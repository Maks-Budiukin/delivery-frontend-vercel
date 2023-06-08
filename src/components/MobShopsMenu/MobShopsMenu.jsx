import { useDispatch, useSelector } from "react-redux"
import { MobMenuWrapper, MenuCloseButton } from "./MobShopsMenu.styled"
import { ShopItem } from "components/ShopList/ShopItem"
import { useEffect } from "react"
import { getShopsThunk } from "redux/shops/shops.thunk"

export const MobShopsMenu = ({showMobMenu}) => {

    const shops = useSelector(state => state.shops.shops)
    const enabledShop = useSelector(state => state.products.enabledShop)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopsThunk()) 
        
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "scroll");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

//     useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = "scroll");
// });

    return (<MobMenuWrapper onClick={showMobMenu}>
                {shops.map(item => {
                    return (<ShopItem key={item._id} itemID={item._id} name={item.name} logo={item.logo} enabled={enabledShop && enabledShop !== item._id ? false : true}  />)
                })}
            
                <MenuCloseButton type="button" onClick={showMobMenu}>X</MenuCloseButton>
            </MobMenuWrapper>)
}