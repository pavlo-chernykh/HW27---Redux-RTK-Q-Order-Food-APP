import { useState, useRef } from "react"

const SliderProgress = ({value, setValue}) => {
  const [width, setWidth] = useState(0)
  const sliderRef = useRef();
  const thumbRef = useRef();

  const mathSpice = (percent) => {
    if(percent <= 15) {
      setValue(0)
      setWidth(0)
    } else if(percent <= 35) {
      setValue(1)
      setWidth(25)
    }else if(percent <= 65) {
      setValue(2)
      setWidth(50)
    }else if(percent <= 85) {
      setValue(3)
      setWidth(75)
    }else if(percent <= 100) {
      setValue(4)
      setWidth(100)
    }
  }

  const onMouseDown = (event) => {
    event.preventDefault();

    let shiftX = event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - sliderRef.current?.getBoundingClientRect().left;

      if (newLeft < 0) {
        newLeft = 0;
      }
      const rightEdge = sliderRef.current?.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      const percent = Math.floor(newLeft/rightEdge*100);
      setWidth(percent)
    }

    function onMouseUp() {
      mathSpice(thumbRef.current.style.left.split('%')[0]);

      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };
  const handlerSliderClick = (event) => {
    const clickX = event.clientX - sliderRef.current.getBoundingClientRect().left;
    if (clickX > 0 & clickX < 40) {
      setValue(0)
      setWidth(0)
    } else if (clickX > 41 & clickX < 120) {
      setValue(1)
      setWidth(25)
    } else if (clickX > 121 & clickX < 200) {
      setValue(2)
      setWidth(50)
    } else if (clickX > 201 & clickX < 280) {
      setValue(3)
      setWidth(75)
    } else if (clickX > 281) {
      setValue(4)
      setWidth(100)
    }
};

  
  return (
    <div className="filters__group">
      <label className="filters__label">Max spiciness</label>
      <div className="filters__slider">
        <div className="slider" ref={sliderRef} onClick={e => handlerSliderClick(e)} >
          <div className="slider__thumb" ref={thumbRef} style={{left: `${width}%`}} onMouseDown={onMouseDown} >
            <span className="slider__value">{value}</span>
          </div>
          <div className="slider__progress" style={{width: `${width}%`}}/>
          <div className="slider__steps">
            {new Array(5).fill('').map((item, i) => <span key={i} className={value === i ? 'slider__step-active' : null}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderProgress