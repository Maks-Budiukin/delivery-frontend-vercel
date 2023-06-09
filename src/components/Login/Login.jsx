import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";

import {
  Wrapper,
  StyledForm,
  Header,
  LinkBlock,
  LinkLabel,
  StyledLink,
  StyledButton,
  PhonePrefix,
  StyledInput,
  StyledPhoneInput,
} from "./Login.styled";
import { toast } from "react-hot-toast";

export const Login = () => {
  const emailInpudId = nanoid();
  const passwordInpudId = nanoid();
  const numberInpudId = nanoid();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phone = number.replace(/[^0-9]/gi, "");
    if (phone.length !== 10) {
      toast.error("Please, enter a valid phone number!");
      return;
    }

    dispatch(loginThunk({ phone, password }));
  };

  return (
    <Wrapper>
      <div>
        <Header>Log IN!</Header>
        <StyledForm onSubmit={handleSubmit}>
          <PhonePrefix>+38</PhonePrefix>
          <label htmlFor={numberInpudId}>Phone </label>
          <StyledPhoneInput
            placeholder="099-111-22-33"
            type="tel"
            name="number"
            id={numberInpudId}
            pattern="([0-9]{10}\-)"
            title="Phone number must be digits in format [operator code] - [number]. For example: 099-111-22-33"
            maxLength={15}
            value={number}
            onChange={onInputChange}
            required
          />
          {/* <label htmlFor={emailInpudId}>Email </label>
          <StyledInput
            placeholder="email@gmail.com"
            type="email"
            name="email"
            id={emailInpudId}
            value={email}
            onChange={onInputChange}
            required
          /> */}
          <label htmlFor={passwordInpudId}>Password </label>
          <StyledInput
            type="password"
            name="password"
            id={passwordInpudId}
            value={password}
            onChange={onInputChange}
            required
          />

          <LinkBlock>
            <LinkLabel>Don't have an acc? </LinkLabel>
            <StyledLink to="/register">Sign UP!</StyledLink>
          </LinkBlock>

          <StyledButton type="submit">Sign In!</StyledButton>
        </StyledForm>
      </div>
    </Wrapper>
  );
};
