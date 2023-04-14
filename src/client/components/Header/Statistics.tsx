import React from "react";
import { Images } from "../../assets/images/images";

export const Statistics = () => {
  return (
    <>
      <a className="header__statistics">
        <img className="header__statistics-img" src={Images.statistics.default} alt="картинка co статистикой" />
        <p className="header__statistics-text ">
          Статистика
        </p>
      </a>
    </>
  )
}

export default Statistics