import Menu from 'react-burger-menu/lib/menus/slide'
import { logoutThunk } from "redux/auth/auth.thunk"
import { useDispatch, useSelector } from "react-redux"
import { StyledLink, StyledButton } from "./BurgerMenu.styled"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const BurgerMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeShop = useSelector(state => state.shops.activeShop)

  const closeMenu = () => {
    setMenuOpen(true)
  }

  const onLogoutClick = () => {
    dispatch(logoutThunk())
    closeMenu();
  }

  const onOrdersClick = () => {
    navigate("/orders")
    closeMenu();
  }

  var styles = {
    bmBurgerButton: {
    position: 'abolute',
    width: '36px',
    height: '30px',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: 180,
  },
  bmCross: {
    background: 'skyblue',
      
  },
  bmMenuWrap: {
    position: 'fixed',
    top: 0,
    height: '100%'
  },
  bmMenu: {
    display: "flex",
    justifyContent: "center",
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    background: '#eaeaea',
    width: '160px'
  },
  bmOverlay: {
    opacity: "0",
  }
}

  useEffect(() => {
    setMenuOpen(false)
  }, [menuOpen])

    return (
       <Menu right styles={styles} itemListElement="div" width={ 160 } isOpen={menuOpen}>
          <StyledLink to={activeShop ? `/${activeShop}` : "/"} onClick={closeMenu}>Shop</StyledLink>
          <StyledLink id="cart" className="menu-item" to="/cart" onClick={closeMenu}>Cart</StyledLink>
        
        {isLoggedIn
          ? <><StyledButton type="button" onClick={() => onLogoutClick()}>Logout</StyledButton>
            <StyledButton id="orders" className="menu-item" to="/orders" onClick={() => onOrdersClick()}>Orders</StyledButton></>
          : <StyledLink to="/register" onClick={closeMenu}>Auth</StyledLink>}
      </Menu>
    )
}