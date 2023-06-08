import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/auth/auth.thunk";
import { ClearCartThunk } from "redux/products/products.thunk";

import {
  StyledSection,
  StyledLink,
  StyledButton,
  NavList,
  NavBar,
  LogoLink,
  Logo,
  StyledClearButton,
  AuthBlock,
  BurgerMenuWrapper,
  MobileBurgerMenuWrapper,
  ClearIcon,
} from "./Navbar.styled";

import { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

import { useMediaQuery } from "react-responsive";

import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";
import { MobShopsMenu } from "components/MobShopsMenu/MobShopsMenu";

export const Navbar = () => {
  const [mobMenuShown, setMobMenuShown] = useState(false);

  const activeShop = useSelector((state) => state.shops.activeShop);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.products.cart);

  const dispatch = useDispatch();

  const isAuthLoading = useSelector((state) => state.auth.isLoading);
  const isShopsLoading = useSelector((state) => state.shops.isLoading);
  const isProductsLoading = useSelector((state) => state.products.isLoading);

  const globadLoading = isAuthLoading || isShopsLoading || isProductsLoading;

  const ref = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: 890 });
  const isTablet = useMediaQuery({ minWidth: 479, maxWidth: 889 });
  const isMobile = useMediaQuery({ maxWidth: 478 });

  const showMobMenu = () => {
    setMobMenuShown(!mobMenuShown);
  };

  useEffect(() => {
    globadLoading
      ? ref.current.continuousStart(30, 10)
      : ref.current.complete();
  }, [globadLoading]);

  return (
    <>
      <StyledSection>
        <NavBar>
          <LogoLink to={activeShop ? `/${activeShop}` : "/"}>
            <Logo src="/logo.jpg"></Logo>
          </LogoLink>

          {isDesktop && (
            <>
              <NavList>
                <li>
                  <StyledLink to={activeShop ? `/${activeShop}` : "/"}>
                    Shop
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/cart">Cart</StyledLink>
                </li>
                {isLoggedIn && (
                  <li>
                    <StyledLink to="/orders">Orders</StyledLink>
                  </li>
                )}
              </NavList>
              <AuthBlock>
                {cart.length > 0 && (
                  <ClearIcon
                    onClick={() => dispatch(ClearCartThunk())}
                    title="Clear cart"
                  />
                )}
                {isLoggedIn ? (
                  <StyledButton
                    type="button"
                    onClick={() => dispatch(logoutThunk())}
                  >
                    Logout
                  </StyledButton>
                ) : (
                  <StyledLink to="/register">Auth</StyledLink>
                )}
              </AuthBlock>
            </>
          )}

          {isTablet && (
            <NavList>
              {cart.length > 0 && (
                <ClearIcon
                  onClick={() => dispatch(ClearCartThunk())}
                  title="Clear cart"
                />
              )}
              <BurgerMenuWrapper>
                <BurgerMenu />
              </BurgerMenuWrapper>
            </NavList>
          )}

          {isMobile && (
            <NavList>
              {cart.length > 0 && (
                <ClearIcon
                  onClick={() => dispatch(ClearCartThunk())}
                  title="Clear cart"
                />
              )}
              <StyledButton
                type="button"
                onClick={showMobMenu}
              >
                Shops
              </StyledButton>
              {mobMenuShown && <MobShopsMenu showMobMenu={showMobMenu} />}
              <MobileBurgerMenuWrapper>
                <BurgerMenu />
              </MobileBurgerMenuWrapper>
            </NavList>
          )}
        </NavBar>
      </StyledSection>

      <div>
        <LoadingBar
          color="skyblue"
          ref={ref}
          loaderSpeed={300}
          height={4}
        />
      </div>
    </>
  );
};
