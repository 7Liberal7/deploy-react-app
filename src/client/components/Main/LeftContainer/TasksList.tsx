import React from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Task } from "./Task";

interface IArrTasks {
  [key: string] : any
}

export const TasksList = () => {
  const arrTasks: IArrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)


  let time: number = 0

  for (let index = 0; index < arrTasks.length; index++) {
    time += arrTasks[index]['time']['minutes']
  }

  let hours = Math.floor(time / 60)
  let minutes = time - hours * 60

  return (
    <>
      {
        arrTasks.length != 0 ?
          <ul className="LeftContainer__tasks">
            {
              arrTasks.map((item: any, index : number) =>
                <Task key={`${Math.random, item} `}
                  number={item['number']}
                  text={item['text']}
                  index={index}
                />
              )
            }
          </ul > : null
      }
      {
        arrTasks.length != 0 &&
        <p className="LeftContainer__tasks-time"> {hours != 0 ? `${hours} час ${minutes} мин` : `${minutes} мин`} </p>
      }
    </>
  )
}

export default TasksList