import React, { useEffect, useRef } from "react";
import { Images } from "../../../assets/images/images";

interface ChangeTaskProps {
  index: number,
  onChange: any
}

export const ChangeTask = (props: ChangeTaskProps) => {
  console.log(props.index)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let counter = 0
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && ref.current?.contains(event.target)) {
        console.log("попал")
      } else {
        if (counter != 0) props.onChange(false)
        else counter++
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  return (
    <>

      <div className="LeftContainer__dropdown" ref={ref}>
        <ul className="LeftContainer__dropdown-list">
          <li className="LeftContainer__dropdown-item">
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.plus.default} alt="" />
              <p className="LeftContainer__dropdown-text">Увеличить</p>
            </button>
          </li>
          <li className="LeftContainer__dropdown-item">
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.minus.default} alt="" />
              <p className="LeftContainer__dropdown-text">Уменьшить</p>
            </button>
          </li>
          <li className="LeftContainer__dropdown-item">
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.edit.default} alt="" />
              <p className="LeftContainer__dropdown-text">Редактировать</p>
            </button>
          </li>
          <li className="LeftContainer__dropdown-item">
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.delete.default} alt="" />
              <p className="LeftContainer__dropdown-text">Удалить</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ChangeTask