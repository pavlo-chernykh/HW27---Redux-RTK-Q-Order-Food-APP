import squareMinusIcon from '../../assets/icons/square-minus-icon.svg';
import squarePlusIcon from '../../assets/icons/square-plus-icon.svg';
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from '../../store/productsSlice'

const ModalItem = (product) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity, totalPrice } = product;

  const incrementItem = () => 
    dispatch(
      addToCart({
        id, 
        name, 
        price, 
        image
      })
  )

  const decrementItem = () => {dispatch(removeItem(id))}


  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={require(`../../assets/products/${product.image}`)} alt="product" />
      </div>
      <div className="cart-product__info">
        <div className="cart-product__title">{product.name}</div>
        <div className="cart-product__price-wrap">
          <div className="cart-counter">
            <button
              type="button"
              className="cart-counter__button cart-counter__button_minus"
              onClick={decrementItem}
            >
              <img
                src={squareMinusIcon}
                alt="minus"
              />
            </button>
            {quantity > 0 && <span className="cart-counter__count">{quantity}</span>}
            <button
              type="button"
              className="cart-counter__button cart-counter__button_plus"
              onClick={incrementItem}
            >
              <img src={squarePlusIcon} alt="plus" />
            </button>
          </div>
          <div className="cart-product__price">€{totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalItem