import React from "react";
import { LeftContainer } from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

export const Main = () => {
  return (
    <>
      {
        <main className="main">
          <div className="container container__main">
            <LeftContainer />
            <RightContainer />
          </div>
        </main>
      }
    </>
  )
}

export default Main