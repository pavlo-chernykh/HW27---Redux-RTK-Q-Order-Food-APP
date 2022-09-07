const Button = ({classNames, img, onClick}) => {
  return (
    <button className={classNames} onClick={onClick}>
      <img src={img} alt='icon'/>
    </button>
  )
}

export default Button