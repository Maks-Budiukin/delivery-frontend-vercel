import { nanoid } from "nanoid";
import { useState } from "react";
import { loginThunk, regThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import {
  Wrapper,
  StyledForm,
  LinkBlock,
  LinkLabel,
  StyledLink,
  StyledButton,
  Header,
  PhonePrefix,
  StyledInput,
  StyledPhoneInput,
} from "./Register.styled";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const nameInpudId = nanoid();
  const emailInpudId = nanoid();
  const passwordInpudId = nanoid();
  const numberInpudId = nanoid();

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const phone = number.replace(/[^0-9]/gi, "");
    if (phone.length !== 10) {
      toast.error("Please, enter a valid phone number!");
      return;
    }

    const { error } = await dispatch(
      regThunk({ name, email, password, phone })
    );
    !error && dispatch(loginThunk({ phone, password }));
  };

  return (
    <Wrapper>
      <div>
        <Header>Sign UP!</Header>
        <StyledForm onSubmit={handleSubmit}>
          <PhonePrefix>+38</PhonePrefix>
          <label htmlFor={nameInpudId}>Name </label>
          <StyledInput
            placeholder="Jimmy Hendrix"
            type="text"
            name="name"
            id={nameInpudId}
            title="Name may contain any symbols and be maximum 16 characters long."
            value={name}
            onChange={onInputChange}
            maxLength={16}
            required
          />

          <label htmlFor={emailInpudId}>Email </label>
          <StyledInput
            placeholder="email@gmail.com"
            type="email"
            name="email"
            id={emailInpudId}
            title="Email must have the following shape: email@email.com"
            value={email}
            onChange={onInputChange}
            required
          />
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
          <label htmlFor={passwordInpudId}>Password </label>
          <StyledInput
            type="password"
            name="password"
            id={passwordInpudId}
            title="Password must be at least 6 characters long!"
            value={password}
            onChange={onInputChange}
            minLength={6}
            required
          />
          <LinkBlock>
            <LinkLabel>Already registered? </LinkLabel>
            <StyledLink to="/login">Log IN!</StyledLink>
          </LinkBlock>

          <StyledButton type="submit">Sign Up!</StyledButton>
        </StyledForm>
      </div>
    </Wrapper>
  );
};
