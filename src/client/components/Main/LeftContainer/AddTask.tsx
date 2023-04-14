import React, { useRef, useState } from "react";
import { RootState, updateInputValue } from "../../../store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";


export const AddTask = () => {
  const value = useSelector<RootState, string>(state => state.InputValue)
  const dispatch = useDispatch()

  let textInput = useRef<HTMLInputElement>(null)
  let [inputValue, setInputValue] = useState('')
  function changeValue(event: any) {
    event.preventDefault()
    if (textInput.current?.value) {
      setInputValue(textInput.current?.value)
    }
  }

  dispatch(updateInputValue(inputValue))

  return (
    <>
      {
        <div className="LeftContainer__addTask">
          <input className="LeftContainer__input" ref={textInput} onInput={changeValue} value={value} type="text" placeholder="Название задачи" />
          <button className="LeftContainer__btn btn">Добавить</button>
        </div>
      }
    </>
  )
}

export default AddTask