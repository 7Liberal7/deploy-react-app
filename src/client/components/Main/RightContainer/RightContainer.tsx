import React from "react";
import { Top } from "./Top";
import { Timer } from "./Timer";
export const RightContainer = () => {
  return (
    <>
      {
        <div className="RightContainer">
          <Top />
          <div className="RightContainer__center">
            <Timer />
          </div>
        </div>
      }
    </>
  )
}

export default RightContainer