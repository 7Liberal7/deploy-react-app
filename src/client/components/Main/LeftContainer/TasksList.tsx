//@ts-nocheck
import React from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";


export const TasksList = () => {
  const arrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)
  return (
    <>
      {
        arrTasks.length != 0 ?
          <ul className="LeftContainer__tasks">
            {
              arrTasks.map((item, index) =>
                < li key={`${Math.random, item} `} className="LeftContainer__tasks-item">
                  <div className="LeftContainer__tasks-info">
                    <span className="LeftContainer__tasks-number">
                      <p className="LeftContainer__tasks-number">{item['number']}</p>
                    </span>
                    <p className="LeftContainer__tasks-text">{item['text']}</p>
                  </div>
                  <button className="LeftContainer__tasks-btn">
                    <span className="LeftContainer__tasks-circle"></span>
                    <span className="LeftContainer__tasks-circle"></span>
                    <span className="LeftContainer__tasks-circle"></span>
                  </button>
                </li>
              )
            }
          </ul > : null
      }
    </>
  )
}

export default TasksList