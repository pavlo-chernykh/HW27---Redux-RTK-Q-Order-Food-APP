import { setNuts, setVegetarian } from "../../store/productsSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getNuts, getVegetarian } from "../../store/selectors";

const Checkboxes = () => {
  const dispatch = useDispatch();
  const nuts = useSelector(getNuts);
  const vegetarian = useSelector(getVegetarian)

  return (
    <>
      <div className="filters__group">
        <div className="filters__checkbox">
          <input
            className="styled-checkbox"
            id="nuts-checkbox"
            type="checkbox"
            defaultValue="1"
            onChange={() => dispatch(setNuts(!nuts))}
          />
          <label htmlFor="nuts-checkbox">
            <span className="filters__label">No nuts</span></label
          >
        </div>
      </div>
      <div className="filters__group">
        <div className="filters__checkbox">
          <input
            className="styled-checkbox"
            id="vegeterian-checkbox"
            type="checkbox"
            defaultValue="1"
            onChange={() => dispatch(setVegetarian(!vegetarian))}
          />
          <label htmlFor="vegeterian-checkbox">
            <span className="filters__label">Vegeterian only</span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Checkboxes