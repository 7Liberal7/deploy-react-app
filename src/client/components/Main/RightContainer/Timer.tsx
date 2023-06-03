import React, { useEffect } from "react";
import { changeTask, RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface IArrTasks {
  [key: string]: any
}


export const Timer = () => {
  const dispatch = useDispatch()
  const arrTasks: IArrTasks = useSelector<RootState, Array<object>>(state => state.Tasks)
  
  useEffect(() => {
    const timerID = setInterval(() => timer(), 1000);
    return () => clearInterval(timerID);
  })

  function timeStart() {
    if (arrTasks.length != 0) {
      dispatch(changeTask({
        number: arrTasks[0]['number'],
        index: 0,
        time: {
          minutes: arrTasks[0]['time']['minutes'],
          seconds: arrTasks[0]['time']['seconds']
        },
        isRun: true
      }))
    }
  }

  function timeStop() {
    if (arrTasks.length != 0) {
      dispatch(changeTask({
        number: arrTasks[0]['number'],
        index: 0,
        time: {
          minutes: arrTasks[0]['time']['minutes'],
          seconds: arrTasks[0]['time']['seconds']
        },
        isRun: false
      }))
    }
  }
  function timer() {
    if (arrTasks.length != 0 && arrTasks[0]['isRun']) {
      if (arrTasks[0]['time']['seconds'] != 0) {
        dispatch(changeTask({
          number: arrTasks[0]['number'],
          index: 0,
          time: {
            minutes: arrTasks[0]['time']['minutes'],
            seconds: arrTasks[0]['time']['seconds'] - 1
          },
          isRun: true
        }))
      } else {
        dispatch(changeTask({
          number: arrTasks[0]['number'],
          index: 0,
          time: {
            minutes: arrTasks[0]['time']['minutes'] - 1,
            seconds: 59
          },
          isRun: true
        }))
      }
    }
  }

  return (
    <>
      {
        <div className="RightContainer__timer">
          <div className="RightContainer__timer-value">
            {arrTasks.length != 0 ? (`${arrTasks[0]['time']['minutes']} : 
            ${String(arrTasks[0]['time']['seconds']).length === 1 ? '0' + arrTasks[0]['time']['seconds'] : arrTasks[0]['time']['seconds']}`)
              : ''}
            <button className="RightContainer__timer-add"></button>
          </div>
          <p className="RightContainer__text">
            Задача 1 - <strong className="RightContainer__text-task">{
              arrTasks.length != 0 ? arrTasks[0]['text'] : 'пока нет задачи'
            }</strong>
          </p>
          <div className="RightContainer__timer-btns">
            <button className="RightContainer__timer-btn btn" onClick={timeStart}>
              Старт
            </button>
            <button className="RightContainer__timer-btn btn btn--grey" onClick={timeStop}>
              Стоп
            </button>
          </div>
        </div >
      }
    </>
  )
}

export default Timer