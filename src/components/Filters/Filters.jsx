import Checkboxes from "./Checkboxes"
import SliderProgress from "./SliderProgress"
import { getSpice } from "../../store/selectors"
import { useDispatch, useSelector } from "react-redux"
import { setSpice } from '../../store/productsSlice'

const Filters = () => {
  const spice = useSelector(getSpice);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="filters">
        <SliderProgress value={spice} setValue={(val) => dispatch(setSpice(val))} />
        <Checkboxes/>
      </div>
    </div>
  )
}

export default Filters