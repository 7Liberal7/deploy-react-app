import React, { useState } from "react";
import { ChangeTask } from "./ChangeTask";
import { useRef } from "react";
import { changeTextTask, removeTask, RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

interface TaskProps {
  key: string
  number: number
  text: string
  index: number
}

interface IArrTasks {
  [key: string] : any
}

export const Task = (props: TaskProps) => {
  const arrTasks: IArrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)
  const dispatch = useDispatch()
  const [isOpenList, setIsOpenList] = useState(false)
  const [isInput, setIsInput] = useState(false)
  const [value, setValue] = useState(props.text)
  const [openDelTask, setOpenDelTask] = useState(false)
  const [isTask, setIsTask] = useState(true)
  const [count, setCount] = useState(0)
  const body = document.querySelector('#body')

  const textInput = useRef<HTMLInputElement>(null)


  function changeValue(event: any) {
    event.preventDefault()
    if (textInput.current?.value) {
      setValue(textInput.current?.value)
    }
    if (textInput.current?.value === '') {
      setValue('')
    }
  }


  function changeListOpen(elem: any) {
    if (elem.clientY > 740) {
      setCount(elem.clientY - 740)
    }

    setIsOpenList(!isOpenList)
  }

  function blurFunc() {
    setIsInput(false)
    dispatch(changeTextTask({
      index: arrTasks[props.index]['index'],
      text: value
    }))
  }

  function closeTask() {
    body?.classList.remove('body--hidden')
    dispatch(removeTask({
      index: arrTasks[props.index]['index']
    }))
    setIsTask(false)
  }

  function closeModalDel() {
    setOpenDelTask(false)
  }
  console.log(count)
  return (
    <>
      {isTask &&
        < li key={props.key} className="LeftContainer__tasks-item">
          <div className="LeftContainer__tasks-info" id={props.key}>
            <span className="LeftContainer__tasks-number">
              <p className="LeftContainer__tasks-number">{props.number}</p>
            </span>
            <input className="LeftContainer__tasks-text" onBlur={blurFunc} type="text" value={value} ref={textInput} disabled={!isInput} onInput={changeValue} />
          </div>
          <button className="LeftContainer__tasks-btn" onClick={changeListOpen}>
            <span className="LeftContainer__tasks-circle"></span>
            <span className="LeftContainer__tasks-circle"></span>
            <span className="LeftContainer__tasks-circle"></span>
          </button>
          {isOpenList && <ChangeTask index={props.index} bottom={count} onChange={setIsOpenList} inputRef={textInput} setInput={setIsInput} isInput={isInput} text={value} delTask={setOpenDelTask} />}
          {openDelTask && ReactDOM.createPortal((
            <div className="modal-del">
              <div className="modal-del__container">
                <button className="modal-del__close" onClick={closeModalDel}>
                  <span className="modal-del__close-elem"></span>
                  <span className="modal-del__close-elem modal-del__close-elem--second"></span>
                </button>
                <div className="modal-del__wrapper">
                  <h6 className="modal-del__title">
                    Удалить задачу?
                  </h6>
                  <button className="btn btn--del" onClick={closeTask}>
                    Удалить
                  </button>
                  <button className="modal-del__btn" onClick={closeModalDel}>Отмена</button>
                </div>
              </div>
            </div>
          ), document.querySelector('#modal-root') as HTMLElement) }
        </li>
      }
    </>
  )
}

export default Task