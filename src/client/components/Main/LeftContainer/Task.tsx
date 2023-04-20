import React, { useState } from "react";
import { ChangeTask } from "./ChangeTask";

interface TaskProps {
  key: string
  number: number
  text: string
  index: number
}

export const Task = (props: TaskProps) => {
  const [isOpenList, setIsOpenList] = useState(false)
  function changeListOpen() {
    setIsOpenList(!isOpenList)
  }


  return (
    <>
      < li key={props.key} className="LeftContainer__tasks-item">
        <div className="LeftContainer__tasks-info">
          <span className="LeftContainer__tasks-number">
            <p className="LeftContainer__tasks-number">{props.number}</p>
          </span>
          <p className="LeftContainer__tasks-text">{props.text}</p>
        </div>
        <button className="LeftContainer__tasks-btn" onClick={changeListOpen}>
          <span className="LeftContainer__tasks-circle"></span>
          <span className="LeftContainer__tasks-circle"></span>
          <span className="LeftContainer__tasks-circle"></span>
        </button>
        {isOpenList && <ChangeTask index={props.index} onChange={setIsOpenList}/>}
      </li>
    </>
  )
}

export default Task