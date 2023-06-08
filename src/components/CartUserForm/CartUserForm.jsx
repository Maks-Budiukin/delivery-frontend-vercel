import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { ClearCartThunk, createOrderThunk } from "redux/products/products.thunk";
import { useNavigate } from "react-router-dom";

import {StyledForm, StyledButton, TotalPrice, ToastContainer, ToastButton, TotalSubmit} from "./CartUserForm.styled"

export const CartUserForm = () => {
    const cart = useSelector(state => state.products.cart)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [number, setNumber] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);

    const nameInpudId = nanoid();
    const emailInpudId = nanoid();
    const phoneInpudId = nanoid();
    const addressInpudId = nanoid();
  
    const navigate = useNavigate();

    const onInputChange = (event) => {
      switch (event.target.name) {
        case "name": setName(event.target.value);
            break;
        case "number": setNumber(event.target.value);
            break;
        case "email": setEmail(event.target.value);
            break;
        case "address": setAddress(event.target.value);
            break;
      default: return;
        }
    }
  
  const rawTotalInit = 0;
  const rawTotal = cart.reduce((acc, item) => acc + item.price * item.count, rawTotalInit)

  const total = parseFloat(rawTotal.toFixed(2));

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createOrderThunk({cart, user: {email, name, number, address}, total}))
    
    dispatch(ClearCartThunk());

    toast((t) => (
      <ToastContainer>
        <div>
            <b>Your order has been created!</b>
            <br />
            Our manager will call in a moment!
            <ToastButton onClick={() => toast.dismiss(t.id)}>OK</ToastButton>
        </div>
      </ToastContainer>
    ));

    navigate("/orders")
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor={nameInpudId}>Name </label>
      <input
            placeholder="Jimmy Hendrix"
            type="text"
            name="name"
            id={nameInpudId}
            title="Name may contain any symbols and be maximum 16 characters long"
            value={name}
            onChange={onInputChange}
            maxLength={16}
            required
              />
      <label htmlFor={phoneInpudId}>Number </label>    
      <input
            placeholder="+380991112233"
            type="tel"
            name="number"
            id={phoneInpudId}
            pattern="[+]38([0-9]{10})"
            title="Phone number must be digits in format +38XXXXXXXXXX (NO DASHES!)"
            minLength={13}
            maxLength={13}
            value={number}
            onChange={onInputChange}
            required
              />
      <label htmlFor={emailInpudId}>Email </label>
      <input
        placeholder="email@gmail.com"
        type="email"
        name="email"
        id={emailInpudId}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={email}
        onChange={onInputChange}
        title="Your email address"
        required
          />
      <label htmlFor={addressInpudId}>Delivery address </label>
      <textarea
            rows="4"
            placeholder="London, Baker's Street, 1"
            type="text"
            name="address"
            id={addressInpudId}
            title="Your address for deliveries"
            value={address}
            onChange={onInputChange}
            
              />
      <TotalSubmit>
        <TotalPrice>${total}</TotalPrice>
        <StyledButton type="submit">Submit Order</StyledButton>
      </TotalSubmit>
    </StyledForm>)
}