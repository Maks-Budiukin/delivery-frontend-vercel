import { useDispatch, useSelector } from "react-redux"
import { ProdItem } from "./ProdItem"
import { useEffect } from "react"
import { getProductsThunk } from "../../redux/products/products.thunk"
import { StyledGallery, SpaceFiller } from "./ProdGallery.styled"
import { useParams } from "react-router-dom"

export const ProdGallery = () => {

    const products = useSelector(state => state.products.products)
    const {id} = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        id && dispatch(getProductsThunk(id))
    }, [dispatch, id])

    return (
        <StyledGallery>
            {products.map(item => {
                return (<ProdItem key={item._id} id={item._id} name={item.name} img={item.img} price={item.price} description={item.description} shop={id}></ProdItem>)
            })}
            <SpaceFiller />
            <SpaceFiller />
            <SpaceFiller />
            <SpaceFiller />
            <SpaceFiller />
            <SpaceFiller />
        </StyledGallery>
        )
}