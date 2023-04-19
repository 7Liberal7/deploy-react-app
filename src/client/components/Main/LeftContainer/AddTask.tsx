import React, { useRef, useState } from "react";
import { updateTasks, RootState } from "../../../store";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";

export const AddTask = () => {
  const arrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)
  const dispatch = useDispatch()
  let textInput = useRef<HTMLInputElement>(null)
  let [inputValue, setInputValue] = useState('')
  function changeValue(event: any) {
    event.preventDefault()
    if (textInput.current?.value) {
      setInputValue(textInput.current?.value)
    }
    if (textInput.current?.value === '') {
      setInputValue('')
    }
  }

  function addValue() {
    dispatch(updateTasks({
      text: inputValue,
      number: arrTasks.length + 1,
      time: {
        minutes: 25,
        seconds: 0
      },
      isRun: false
    }))
    setInputValue('')
  }
  return (
    <>
      {
        <div className="LeftContainer__addTask">
          <input className="LeftContainer__input" ref={textInput} onInput={changeValue} value={inputValue} type="text" placeholder="Название задачи" />
          <button className="LeftContainer__btn btn" onClick={addValue}>Добавить</button>
        </div>
      }
    </>
  )
}

export default AddTask