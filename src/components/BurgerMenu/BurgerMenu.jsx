import { slide as Menu } from 'react-burger-menu'
import {StyledLink} from "./BurgerMenu.styled"

export const BurgerMenu = () => {

    const showSettings = (event) => {
        event.preventDefault();
    
    }

    var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '8px',
    top: '8px'
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
    //   background: '#87cfeb3b',
      display: "flex",
      justifyContent: "center",
      
    // padding: '2.5em 1.5em 0',
    // fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
        bmItemList: {
            background: '#eaeaea'
    //   paddingTop: "16px",
    // color: '#b8b7ad',
    // padding: '0.8em'

  },
  bmItem: {
    // display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}



    return (
       <Menu right styles={styles} itemListElement="div" width={ 160 }>
        <StyledLink id="shop" className="menu-item" to="/">Shop</StyledLink>
        <StyledLink id="cart" className="menu-item" to="/cart">Cart</StyledLink>
        <StyledLink onClick={showSettings} className="menu-item--small" href="/">Settings</StyledLink>
      </Menu>
    )
}