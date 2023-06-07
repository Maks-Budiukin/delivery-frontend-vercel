import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrdersThunk } from "redux/auth/auth.thunk";
import { OrdersList } from "components/OrdersList/OrdersList";


export const Orders = () => {
    const userID = useSelector(state => state.auth.user.id)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch();

    useEffect(() => {
        isLoggedIn && dispatch(getOrdersThunk(userID))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isLoggedIn])
 
    return (<OrdersList />)
}