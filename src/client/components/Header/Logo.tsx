import React from "react";
import { Images } from "../../assets/images/images";
export const Logo = () => {
  return (
    <>
      <a className="header__logo">
        <img className="header__logo-img" src={Images.logo.default} alt="логотип" />
        <p className="header__logo-text">
          pomodoro_box
        </p>
      </a>
    </>
  )
}

export default Logo