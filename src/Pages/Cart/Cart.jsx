import { CartUserForm } from "components/CartUserForm/CartUserForm";
import { CartList } from "components/CartList/CartList";
import { useSelector } from "react-redux";
import { Wrapper, StyledButton, StyledEmptyPicture} from "./Cart.styled";

export const Cart = () => {
    
    const cart = useSelector(state => state.products.cart)

    return (
        <Wrapper>
            {cart.length > 0
            ? <><CartUserForm /> <CartList /> </>
                : <div style={{textAlign: "center"}}>
                    <StyledEmptyPicture src="/empty-cart.png" alt="Your Cart is empty" />
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>Your Cart is empty</div>
                    <div style={{ color: "silver" }}>Looks like you haven't added anything to your Cart yet.</div>
                    <StyledButton to={"/"}>Go shopping!</StyledButton>
                </div>}
        </Wrapper>)
}