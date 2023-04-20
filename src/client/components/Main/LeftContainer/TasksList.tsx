//@ts-nocheck
import React from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Task } from "./Task";


export const TasksList = () => {
  const arrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)

  return (
    <>
      {
        arrTasks.length != 0 ?
          <ul className="LeftContainer__tasks">
            {
              arrTasks.map((item, index) =>
                <Task key={`${Math.random, item} `}
                  number={item['number']}
                  text={item['text']}
                  index={index}
                />
              )
            }
          </ul > : null
      }
    </>
  )
}

export default TasksList