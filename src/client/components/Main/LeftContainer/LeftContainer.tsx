import React from "react";
import { Title } from "./Title";
import { List } from "./List";
import { AddTask } from "./AddTask";
export const LeftContainer = () => {
  return (
    <>
      <div className="LeftContainer">
        <Title />
        <List />
        <AddTask />
      </div>
    </>
  )
}

export default LeftContainer