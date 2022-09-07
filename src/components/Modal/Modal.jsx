import crossIcon from '../../assets/icons/cross-icon.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartOpenStatus, getCart, getCartSum } from '../../store/selectors';
import { openCart } from '../../store/productsSlice';
import ModalItem from './ModalItem';

function Modal() {
  const dispatch = useDispatch();
  const status = useSelector(getCartOpenStatus);
  const cart = useSelector(getCart);
  let cartSum = useSelector(getCartSum)
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__inner">
        <div className="modal__header">
          <button type="button" className="modal__close" onClick={() => dispatch(openCart(!status))} >
            <img src={crossIcon} alt="close-icon" />
          </button>
          <h3 className="modal__title">Your order</h3>
        </div>
        <div className="modal__body">
          <div>
            {cart.map((product, i) => {
              return (
                <ModalItem key={i} {...product}/>
              )})}
            <form className="cart-form" onSubmit={() => alert(`Order successful! Your order is being cooked :)`)} >
              <h5 className="cart-form__title">Delivery</h5>
              <div className="cart-form__group cart-form__group_row">
                <input
                  type="text"
                  className="cart-form__input"
                  placeholder="Name"
                  required
                  defaultValue="Santa Claus"
                />
                <input
                  type="email"
                  className="cart-form__input"
                  placeholder="Email"
                  required
                  defaultValue="john@gmail.com"
                />
                <input
                  type="tel"
                  className="cart-form__input"
                  placeholder="Phone"
                  required
                  defaultValue="+1234567"
                />
              </div>
              <div className="cart-form__group">
                <input
                  type="text"
                  className="cart-form__input"
                  placeholder="Address"
                  required
                  defaultValue="North, Lapland, Snow Home"
                />
              </div>
              <div className="cart-buttons">
                <div className="cart-buttons__buttons btn-group">
                  <div className="cart-buttons__info">
                    <span className="cart-buttons__info-text">total</span>
                    <span className="cart-buttons__info-price">€{cartSum}</span>
                  </div>
                  <button
                    type="submit"
                    className="cart-buttons__button btn-group__button button"
                  >
                    order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Modal;