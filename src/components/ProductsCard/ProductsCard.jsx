import plusIcon from '../../assets/icons/plus-icon.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/productsSlice';
const ProductsCard = (product) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card__top">
        <img
          src={require(`../../assets/products/${product.image}`)}
          className="card__image"
          alt="product"
        />
        <span className="card__price">€{product.price.toFixed(2)}</span>
      </div>
      <div className="card__body">
        <div className="card__title">{product.name}</div>
        <button type="button" className="card__button" onClick={() => dispatch(addToCart(product))}>
          <img src={plusIcon} alt="icon" />
        </button>
      </div>
    </div>
  )
}

export default ProductsCard;