import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../store/productsSlice";
import { getCart, getCartSum, getCartTotalItems } from "../../store/selectors";

const Header = () => {
  const dispatch = useDispatch()
  const buttonRef = useRef();

  const cart = useSelector(getCart);
  const cartSum = useSelector(getCartSum)
  const cartTotalItems = useSelector(getCartTotalItems)
  const onScroll = (e) => {
    
    const elPosition = buttonRef.current?.getBoundingClientRect();
    if (elPosition) {
      if(elPosition.top <= window.scrollY) {
        buttonRef.current.style.position = 'fixed'
        buttonRef.current.style.right = '10%'
        buttonRef.current.style.transition = '0s'
      } else {
        buttonRef.current.style.position = 'absolute'
        buttonRef.current.style.right = '0'
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    };
  }, []);

  return ( 
    <header className="header container">
      <h1 className="heading logo">Bangkok Express</h1>
      <h3 className="subheading">Great food・Free delivery・Fair price</h3>

      {cart.length > 0 && <button type="button" className="cart-icon cart-icon_visible" ref={buttonRef} onClick={() => dispatch(openCart(true))} >
        <div className="cart-icon__inner">
          <span className="cart-icon__count">{cartTotalItems}</span>
          <span className="cart-icon__price">€{cartSum}</span>
        </div>
      </button>}
    </header>
   );
}
 
export default Header;