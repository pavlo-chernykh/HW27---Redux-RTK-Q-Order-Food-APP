import angleIcon from '../../assets/icons/angle-icon.svg';
import { useRef, useState, useEffect } from 'react';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import RibbonItem from './RibbonItem'
import { setfilter } from '../../store/productsSlice';

const filter = [
  {name: 'All'},
  {name: 'Salads'},
  {name: 'Soups'},
  {name: 'Chicken dishes'},
  {name: 'Beef dishes'},
  {name: 'Seafood dishes'},
  {name: 'Vegetable dishes'},
  {name: 'Bits and bites'},
  {name: 'On the side'}
];

const Ribbon = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const handleClickButton = (val) => {
    scrollRef.current.scrollLeft += val;
  }

  useEffect(() => {
    if(scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setScrollWidth(scrollWidth);

      scrollRef.current.addEventListener("scroll", () => {
        setScrollPosition(+scrollRef.current.scrollLeft)
      })
    }
  }, [scrollRef]);
  
  return (
    <div className="ribbon">
    {scrollPosition !== 0 && <Button classNames={"ribbon__arrow ribbon__arrow_left ribbon__arrow_visible"} img={angleIcon} onClick={() => handleClickButton(-300)} />} 
      <nav className="ribbon__inner" ref={scrollRef}> 
        {filter.map((filterItem, i) => <RibbonItem key={filterItem.name} {...filterItem} isActive={activeItem === i} setActiveItem={() => setActiveItem(i)} onClick={() => dispatch(setfilter(filterItem.name)) } />)}
      </nav>
    {scrollPosition <= scrollWidth && <Button classNames={"ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"} img={angleIcon} onClick={() => handleClickButton(300)} />}
    </div>
  )
}

export default Ribbon