import React from "react";
import { Logo } from "./Logo";
import { Statistics } from "./Statistics";


export const Header = () => {
  return (
    <>
      {
        <header className="header">
          <div className="container header__container">
            <Logo />
            <Statistics />
          </div>
        </header>
      }
    </>
  )
}

export default Header
