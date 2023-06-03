import React, { useEffect, useRef } from "react";
import { Images } from "../../../assets/images/images";
import { RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { changeNumberTask } from "../../../store";

interface ChangeTaskProps {
  index: number,
  onChange: any,
  setInput: any,
  isInput: boolean,
  text: string,
  inputRef: any,
  delTask: any,
  bottom: number
}

interface IArrTasks {
  [key: string  ]: any
}

export const ChangeTask = (props: ChangeTaskProps) => {
  const arrTasks: IArrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const body = document.querySelector('#body')

  useEffect(() => {
    let counter = 0
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Node && ref.current?.contains(event.target))) {
        if (counter != 0) props.onChange(false)
        else counter++
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  function increase() {
    dispatch(changeNumberTask({
      index: arrTasks[props.index]['index'],
      number: arrTasks[props.index]['number'] + 1,
    }))
  }

  function decrease() {
    dispatch(changeNumberTask({
      index: arrTasks[props.index]['index'],
      number: arrTasks[props.index]['number'] - 1,
    }))
  }


  function changeText() {
    props.setInput(true)

    props.inputRef.current.focus()
  }

  useEffect(() => {
    if (props.isInput) changeText()
  }, [props.isInput])

  function del() {
    props.delTask(true)
    body?.classList.add('body--hidden')
  }

  return (
    <>

      <div className="LeftContainer__dropdown" ref={ref} style={{ bottom: `${props.bottom - 130}px` }}>
        <ul className="LeftContainer__dropdown-list">
          <li className="LeftContainer__dropdown-item" onClick={increase}>
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.plus.default} alt="" />
              <p className="LeftContainer__dropdown-text">Увеличить</p>
            </button>
          </li>
          <li className="LeftContainer__dropdown-item" onClick={decrease}>
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.minus.default} alt="" />
              <p className="LeftContainer__dropdown-text">Уменьшить</p>
            </button>
          </li>
          <li className="LeftContainer__dropdown-item" onClick={changeText}>
            <button className="LeftContainer__dropdown-btn">
              <img className="LeftContainer__dropdown-img" src={Images.edit.default} alt="" />
              <p className="LeftContainer__dropdown-text">Редактировать</p>
            </button>
          </li>
          <li className="LeftContainer__dropdown-item" onClick={del}>
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