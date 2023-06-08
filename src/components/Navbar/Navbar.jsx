import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "redux/auth/auth.thunk"
import { ClearCartThunk } from "redux/products/products.thunk"

import { StyledSection, StyledLink, StyledButton, NavList, NavBar, LogoLink, Logo, StyledClearButton, AuthBlock} from "./Navbar.styled"
import { useEffect, useRef } from "react"
import LoadingBar from "react-top-loading-bar"

import { useMediaQuery } from 'react-responsive'

import { BurgerMenu } from "components/BurgerMenu/BurgerMenu"

export const Navbar = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const cart = useSelector(state => state.products.cart)
    const dispatch = useDispatch();

    const activeShop = useSelector(state => state.shops.activeShop)


    const isAuthLoading = useSelector(state => state.auth.isLoading)
    const isShopsLoading = useSelector(state => state.shops.isLoading)
    const isProductsLoading = useSelector(state => state.products.isLoading)
  
    const globadLoading = isAuthLoading || isShopsLoading || isProductsLoading;
    const ref = useRef(null);
  
        const isDesktop = useMediaQuery({ query: '(min-width: 890px)' })
        const isTablet = useMediaQuery({ query: '(max-width: 889px)' })
        const isMobile = useMediaQuery({ query: '(max-width: 479px)' })


  useEffect(() => {
    globadLoading ? ref.current.continuousStart(30, 10) : ref.current.complete();
  }, [globadLoading])




    return (<><StyledSection>
        <NavBar>
            {isDesktop && (<><LogoLink to={activeShop ? `/${activeShop}` : "/"}>
                <Logo src="/logo.jpg"></Logo>
            </LogoLink>

            <NavList>
                <li><StyledLink to={activeShop ? `/${activeShop}` : "/"}>Shop</StyledLink></li>
                <li><StyledLink to="/cart">Cart</StyledLink></li>
                {isLoggedIn && <li><StyledLink to="/orders">Orders</StyledLink></li>}
            </NavList>
            <AuthBlock>
                {cart.length > 0 && <StyledClearButton type="button" onClick={() => dispatch(ClearCartThunk())}>Clear Cart</StyledClearButton>}
                {isLoggedIn? 
            <StyledButton type="button" onClick={() => dispatch(logoutThunk())}>Logout</StyledButton>
            : <StyledLink to="/register">Auth</StyledLink>
                }
                </AuthBlock></>)}
            {isTablet && <><LogoLink to={activeShop ? `/${activeShop}` : "/"}>
                <Logo src="/logo.jpg"></Logo>
        </LogoLink>
        <div><BurgerMenu></BurgerMenu></div></>}
        
                

        </NavBar>
    </StyledSection>
    
    
    <div>
      <LoadingBar
        color='skyblue'
        ref={ref}
                loaderSpeed={300}
                height={4}
      />
    </div>
    </>)
}