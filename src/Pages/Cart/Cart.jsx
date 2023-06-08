import { CartUserForm } from "components/CartUserForm/CartUserForm";
import { CartList } from "components/CartList/CartList";
import { useSelector } from "react-redux";
import { Wrapper, StyledButton, StyledEmptyPicture, EmptyCartImageThumb, EmptyCartInfoHeader, EmptyCartInfoText} from "./Cart.styled";

export const Cart = () => {
    
    const cart = useSelector(state => state.products.cart)

    return (
        <Wrapper>
            {cart.length > 0
            ? <><CartUserForm /> <CartList /> </>
                : <EmptyCartImageThumb>
                    <StyledEmptyPicture src="/empty-cart.png" alt="Your Cart is empty" />
                    <EmptyCartInfoHeader>Your Cart is empty</EmptyCartInfoHeader>
                    <EmptyCartInfoText>Looks like you haven't added anything to your Cart yet.</EmptyCartInfoText>
                    <StyledButton to={"/"}>Go shopping!</StyledButton>
                </EmptyCartImageThumb>}
        </Wrapper>)
}