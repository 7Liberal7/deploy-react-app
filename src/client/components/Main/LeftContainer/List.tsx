import React from "react";

export const List = () => {
  return (
    <>
      {
        <ul className="LeftContainer__list">
          <li className="LeftContainer__list-item">
            Выберите категорию и напишите название текущей задачи
          </li>
          <li className="LeftContainer__list-item">
            Запустите таймер («помидор»)
          </li>
          <li className="LeftContainer__list-item">
            Работайте пока «помидор» не прозвонит
          </li>
          <li className="LeftContainer__list-item">
            Сделайте короткий перерыв (3-5 минут)
          </li>
          <li className="LeftContainer__list-item">
            Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)
          </li>
        </ul>
      }
    </>
  )
}

export default List