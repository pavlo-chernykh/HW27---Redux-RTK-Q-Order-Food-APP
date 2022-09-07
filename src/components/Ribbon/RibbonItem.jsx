const RibbonItem = ({name, isActive, setActiveItem, onClick}) => {
  return (
    <button className={`ribbon__item ${isActive && 'ribbon__item_active'}`} onClick={() => {setActiveItem(); onClick()}}>{name}</button>
  )
}

export default RibbonItem
