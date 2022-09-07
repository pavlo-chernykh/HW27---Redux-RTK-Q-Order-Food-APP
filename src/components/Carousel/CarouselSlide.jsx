import { useDispatch } from "react-redux";
import plusIcon from "../../assets/icons/plus-icon.svg";
import { addToCart } from "../../store/productsSlice";

const CarouselSlide = (product) => {
  const dispatch = useDispatch();
  return (
    <div className="carousel__slide">
      <img
        src={require(`../../assets/carousel/${product.image}`)}
        className="carousel__img"
        alt="slide"
      />
      <div className="carousel__caption">
        <span className="carousel__price">€{product.price.toFixed(2)}</span>
        <div className="carousel__title">{product.name}</div>
        <button type="button" className="carousel__button" onClick={() => dispatch(addToCart(product))} >
          <img src={plusIcon} alt="icon" />
        </button>
      </div>
    </div>
  )
}

export default CarouselSlide