import React from "react";

export const Timer = () => {
  return (
    <>
      {
        <div className="RightContainer__timer">
          <div className="RightContainer__timer-value">
            25:00
            <button className="RightContainer__timer-add"></button>
          </div>
          <p className="RightContainer__text">
            Задача 1 - <strong className="RightContainer__text-task">Сверстать сайт</strong>
          </p>
          <div className="RightContainer__timer-btns">
            <button className="RightContainer__timer-btn btn">
              Старт
            </button>
            <button className="RightContainer__timer-btn btn btn--grey">
              Стоп
            </button>
          </div>
        </div >
      }
    </>
  )
}

export default Timer