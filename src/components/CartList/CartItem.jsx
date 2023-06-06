import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { RemoveFromCartThunk, changeItemCountThunk } from "redux/products/products.thunk"

import {
    StyledCartItem,
    ImageThumb,
    CartItemInfo,
    ProductPicture,
    NamePrice,
    ItemPrice,
    ItemName,
    CounterTotal,
    CounterInput,
    CounterButton,
    ItemTotal,
    ItemTotalPrice,
    DeleteButton
} from "./CartItem.styled";

export const CartItem = ({item}) => {
    const [counterValue, setCounterValue] = useState(item.count);

    const counterInpudId = nanoid();
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        if (event.target.value > 0 && !isNaN(parseInt(event.target.value))) {
            setCounterValue(parseInt(event.target.value));
        }

        if (event.target.value === "") {
            setCounterValue(1);
        }
    }
    
    const counterIncr = () => {
        setCounterValue(prevState => prevState += 1)
    }
    
    const counterDecr = () => {
        setCounterValue(prevState => prevState -= 1)
    }

    useEffect(() => {
        dispatch(changeItemCountThunk({id: item.id, count: counterValue}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, counterValue])

    const totalProdValue = (prodPrice) => {
        const sum = parseFloat((prodPrice * counterValue).toFixed(2));
        return sum;
    }

    const handleRemove = (id) => {
        dispatch(RemoveFromCartThunk(id))
    }

    return (
        <StyledCartItem>
            <ImageThumb>
                <ProductPicture src={item.img} alt="shop logo"></ProductPicture>
            </ImageThumb>
            <CartItemInfo>
                <NamePrice>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>${item.price}</ItemPrice>
                </NamePrice>
                <CounterTotal>
                    <div>
                        <CounterButton type="button" disabled={ counterValue > 1 ? false : true} onClick={counterDecr}>-</CounterButton>
                        <label htmlFor={counterInpudId}></label>    
                        <CounterInput
                            type="text"
                            inputmode="numeric"
                            name="counter"
                            id={counterInpudId}
                            title="put the number of products to order"
                            value={counterValue > 0 ? counterValue : 1}
                        onChange={onInputChange}
                        required
                            />
                        <CounterButton type="button" onClick={counterIncr}>+</CounterButton>
                    </div>
                
                <ItemTotal>TOTAL: <ItemTotalPrice>${totalProdValue(item.price)}</ItemTotalPrice></ItemTotal></CounterTotal>
                <DeleteButton type="button" onClick={() => handleRemove(item.id)}>X</DeleteButton>
            </CartItemInfo>
        </StyledCartItem>
                    )
}